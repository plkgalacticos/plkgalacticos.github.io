'use client'
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ConfigProvider, DatePicker } from 'antd';

const CompetitionForm = ({t, tNav}) => {

  const [startDate, setStartDate] = useState(null);
  const [date, setDate] = useState({ 
    startDate: null, 
    endDate: null
});
  const [file, setFile] = useState(null);
  const [payAmountS, setPayAmountS] = useState(null)
  const [payItemsS, setPayItemsS] = useState(null)
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
  const [form, setForm] = useState({
    email: "",
    gender: "",
    name: "",
    surname: "",
    dateOfBirth: "",
    club: "",
    competitionType: { fullPower: false, benchOnly: false },
    fullPowerDetails: {
      ageCategory: "",
      weightCategory: "",
      bestTotal: 0,
    },
    benchOnlyDetails: {
      ageCategory: "",
      weightCategory: "",
      bestBenchPress: 0,
    },
    photographs: false,
    tshirtSelected: false,
    tshirt: { cut: "", size: "" },
    isInternationCompetitor: false,
    isIntComp: ''
  });

  const [errors, setErrors] = useState({
        email: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        gender: '',
        club: '',
        competitionType: '',
        fullPowerAgeCategory: '',
        fullPowerWeightCategory: '',
        benchOnlyAgeCategory: '',
        benchOnlyWeightCategory: '',
        tshirtCut: '',
        tshirtSize: '',
        isIntComp: '',
  });
  const [message, setMessage] = useState("");

  const [showContent, setShowContent] = useState(false);
  const togglePhotograph = () => {
    setShowContent(!showContent);
  };

  const [showTshirtContent, setShowTshirtContent] = useState(false);
  const toggleTshirt = () => {
    setShowTshirtContent(!showTshirtContent);
  };

  const fetchFile = async (filePath) => {
    const response = await fetch(filePath); // URL to your file
    const blob = await response.blob();
    const newFile = new File([blob], "desiredFilename.ext", { type: blob.type });
    setFile(newFile);
  };

  const checkErrors = (errorsObj) => {
    // Iterate over each property in the errors object
    for (const key in errorsObj) {
        // Check if the property's value is truthy
        if (errorsObj[key]) {
            return false; // Return false if any value is truthy
        }
    }
    return true; // Return true if all values are falsey (empty in this case)
};

  const validateForm = () => {
    const newErrors = {
        email: '',
        name: '',
        surname: '',
        dateOfBirth: '',
        gender: '',
        club: '',
        competitionType: '',
        fullPowerAgeCategory: '',
        fullPowerWeightCategory: '',
        benchOnlyAgeCategory: '',
        benchOnlyWeightCategory: '',
        tshirtCut: '',
        tshirtSize: '',
        isIntComp: '',
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) newErrors.email = t['e1'];
    if (!form.name) newErrors.name = t['e2'];
    if (!form.surname) newErrors.surname = t['e3'];
    if (!form.dateOfBirth) newErrors.dateOfBirth = t['e4'];
    if (!form.gender) newErrors.gender = t['e5'];
    if (!form.isIntComp) newErrors.isIntComp = t['e17'];
    if (!form.club) newErrors.club = t['e6'];
    if (!form.competitionType.fullPower && !form.competitionType.benchOnly) {
      newErrors.competitionType = t['e7'];
    }
    if (form.competitionType.fullPower) {
      if (!form.fullPowerDetails.ageCategory) newErrors.fullPowerAgeCategory = t['e8'];
      if (!form.fullPowerDetails.weightCategory) newErrors.fullPowerWeightCategory = t['e9'];
    }
    if (form.competitionType.benchOnly) {
      if (!form.benchOnlyDetails.ageCategory) newErrors.benchOnlyAgeCategory = t['e10'];
      if (!form.benchOnlyDetails.weightCategory) newErrors.benchOnlyWeightCategory = t['e11'];
    }
    if (form.tshirtSelected) {
      if (!form.tshirt.cut) newErrors.tshirtCut = t['e12'];
      if (!form.tshirt.size) newErrors.tshirtSize = t['e13'];
    }

    setErrors(newErrors);
    return checkErrors(newErrors);
  };

  function formatDate(dateString) {
    // Create a new Date object from the input string
    const date = new Date(dateString);

    // Get the day, month, and year from the date object
    const day = date.getDate();
    const month = date.getMonth() + 1; // getMonth() returns 0 for January, 1 for February, etc.
    const year = date.getFullYear();

    // Format the day and month to ensure they are always two digits
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    // Return the formatted date string in dd-mm-yyyy format
    return `${formattedDay}-${formattedMonth}-${year}`;
}

  const sendEmail = (payAmount, payItems) => {
          emailjs.init("uEC8I-yAYpmANa15F");
          emailjs
            .send(
              "service_9q74ltp",
              t['email-template'],
              {
                email: form.email,
                gender: form.gender,
                name: form.name,
                surname: form.surname,
                dateOfBirth: formatDate(form.dateOfBirth),
                club: form.club,
                competition_type: form.competitionType.benchOnly && form.competitionType.fullPower ? 'Full powerlifting & Bench press only' : form.competitionType.benchOnly ? 'Bench press only' : 'Full powerlifting',
                fullPowerAgeCategory: form.competitionType.fullPower ? form.fullPowerDetails.ageCategory : '/',
                fullPowerWeightCategory: form.competitionType.fullPower ? form.fullPowerDetails.weightCategory + ' kg' : '/',
                fullPowerBestTotal: form.competitionType.fullPower ? form.fullPowerDetails.bestTotal + ' kg' : '/',
                benchOnlyAgeCategory: form.competitionType.benchOnly ? form.benchOnlyDetails.ageCategory : '/',
                benchOnlyWeightCategory: form.competitionType.benchOnly ? form.benchOnlyDetails.weightCategory + ' kg' : '/',
                benchOnlyBestBenchPress: form.competitionType.benchOnly ? form.benchOnlyDetails.bestBenchPress + ' kg' : '/',
                photographs: form.photographs ? t['yes'] : t['no'],
                tShirt : form.tshirtSelected ? form.tshirt.cut + ', ' + form.tshirt.size: '/', 
                totalAmount: payAmount + ' EUR (' + payItems + ')', 
                attachment: file,
              }
            )
            .then(
              () => {setMessage(t['e14'])},
              (error) => setMessage(t['e15'])
            );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setFile("");

    let payAmount = 0
    let payItems = ''

    const filePrefix = t['file'] + "_"
          if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && form.tshirtSelected) {
            // setFile(filePrefix + '105.pdf')
            payAmount = 102
            payItems = `Bench only ${t['uk']} 35 EUR, Full power ${t['uk']} 35 EUR, ${t['ufoto']} 20 EUR, ${t['utshirt']} 12EUR`
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && !form.tshirtSelected) {
            // setFile(filePrefix + '90.pdf')
            payAmount = 90
            payItems =`Bench only ${t['uk']} 35 EUR, Full power ${t['uk']} 35 EUR, ${t['ufoto']} 20 EUR`
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && form.tshirtSelected) {
            // setFile(filePrefix + '85.pdf')
            payAmount = 82
            payItems = `Bench only ${t['uk']} 35 EUR, Full power ${t['uk']} 35 EUR, ${t['utshirt']} 12EUR`
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && !form.tshirtSelected) {
            // setFile(filePrefix + '70.pdf')
            payAmount = 70
            payItems = `Bench only ${t['uk']} 35 EUR, Full power ${t['uk']} 35 EUR`
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && form.tshirtSelected) {
            // setFile(filePrefix + '70.pdf')
            payAmount = 67
            payItems = `1x ${t['uk']} 35 EUR, ${t['ufoto']} 20 EUR, ${t['utshirt']} 12EUR`
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && !form.tshirtSelected) {
            // setFile(filePrefix + '55.pdf')
            payAmount = 55
            payItems = `1x ${t['uk']} 35 EUR, ${t['ufoto']} 20 EUR`
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && !form.photographs && form.tshirtSelected) {
            // setFile(filePrefix + '50.pdf')
            payAmount = 47
            payItems =`1x ${t['uk']} 35 EUR, ${t['utshirt']} 12EUR`
          } else {
            // setFile(filePrefix + '35.pdf')
            payAmount = 35
            payItems = `1x ${t['uk']} 35 EUR`
          }
    setPayAmountS(payAmount)
    setPayItemsS(payItems)

    if (validateForm()) {
        setFile('file')
          const sheetForm = {
                    "Email": form.email,
                    "Spol": form.gender,
                    "Ime": form.name,
                    "Prezime": form.surname,
                    "Datum rođenja": formatDate(form.dateOfBirth),
                    "Klub": form.club,
                    "Tip natjecanja": form.competitionType.benchOnly && form.competitionType.fullPower ? 'Full powerlifting & Bench press only' : form.competitionType.benchOnly ? 'Bench press only' : 'Full powerlifting',
                    "Full power dobna kategorija": form.competitionType.fullPower ? form.fullPowerDetails.ageCategory : '/',
                    "Full power težinska kategorija": form.competitionType.fullPower ? form.fullPowerDetails.weightCategory + ' kg' : '/',
                    "Najbolji total": form.competitionType.fullPower ? form.fullPowerDetails.bestTotal + ' kg' : '/',
                    "Bench only dobna kategorija": form.competitionType.benchOnly ? form.benchOnlyDetails.ageCategory : '/',
                    "Bench only težinska kategorija": form.competitionType.benchOnly ? form.benchOnlyDetails.weightCategory + ' kg' : '/',
                    "Najbolji bench press": form.competitionType.benchOnly ? form.benchOnlyDetails.bestBenchPress + ' kg' : '/',
                    "Fotografije": form.photographs ? 'Da' : 'Ne',
                    "Majica": form.tshirtSelected ? 'Da' : 'Ne',
                    "Kroj": form.tshirtSelected && form.tshirt.cut ? form.tshirt.cut : '/', 
                    "Veličina": form.tshirtSelected && form.tshirt.size ? form.tshirt.size : '/',
                    "Međunarodni natjecatelj": form.isIntComp,
                    "Cijena": payAmount
          }

        //   SheetDB.write('https://sheetdb.io/api/v1/wxafnxolcqbw9', { sheet: 'Sheet1', data: sheetForm }).then(function(result){
        //   }, function(error){
        //   });

        //   setMessage(t['e14'])
          
        //   sendEmail(payAmount, payItems);

          reloadForm();
    } else {
      setMessage(t['e16']);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "fullPower" || name === "benchOnly") {
        setForm((prev) => ({
          ...prev,
          competitionType: {
            ...prev.competitionType,
            [name]: checked,
          },
        }));
      } else if (name === "photographs") {
        setForm((prev) => ({ ...prev, photographs: checked }));
      } else if (name === "tshirt") {
        setForm((prev) => ({
          ...prev,
          tshirtSelected: checked,
        }));
      }
      else if (name === "isInternationalCompetitor") {
        setForm((prev) => ({
          ...prev,
          isInternationCompetitor: checked,
        }));
        }
    }  else {
      const [section, key] = name.split(".");
      if (section === "fullPowerDetails" || section === "benchOnlyDetails" || section === "tshirt") {
        setForm((prev) => ({
          ...prev,
          [section]: {
            ...prev[section],
            [key]: value,
          },
        }));
      } else {
        setForm((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const reloadForm = () => {
    setForm({
        email: "",
        gender: "",
        name: "",
        surname: "",
        dateOfBirth: "",
        club: "",
        competitionType: { fullPower: false, benchOnly: false },
        fullPowerDetails: {
          ageCategory: "",
          weightCategory: "",
          bestTotal: 0,
        },
        benchOnlyDetails: {
          ageCategory: "",
          weightCategory: "",
          bestBenchPress: 0,
        },
        photographs: false,
        tshirtSelected: false,
        tshirt: { cut: "", size: "" },
        isInternationCompetitor: false,
        isIntComp: ''
      })
      setStartDate(null)
  }


  return (
    <div className="relative flex flex-row justify-center items-center gap-8 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-3xl bg-opaque-purple bg-glow  p-4 lg:p-12 mt-24 z-10">
          <h2 className="text-xl">{t['for1']} <a href={"/" + tNav['foreign-link']} className="text-logo-yellow underline">{t['for2']}</a> {t['for3']}</h2>
          <p>{t['note']}</p>
          <h2 className="text-2xl font-semibold mt-8">{t['h1']}</h2>
          <div className="flex flex-col justify-center items-start">
            <label>{t['l1']}: </label>
            <input className="mt-1"
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.email}</p>}
          </div>
        
          <div className="flex flex-col justify-center items-start">
            <label>{t['l2']}: </label>
            <select name="gender" value={form.gender} onChange={handleInputChange} className="select mt-1">
              <option value="">{t['s1']}</option>
              <option value={t['s12']}>{t['s11']}</option>
              <option value={t['s14']}>{t['s13']}</option>
            </select>

                {errors.gender && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.gender}</p>}
          </div>
        
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="w-full">
              <label>{t['l3']}: </label>
              <input className="mt-1"
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.name}</p>}
            </div>
            
            <div className="w-full">
              <label>{t['l4']}: </label>
              <input className="mt-1"
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleInputChange}
              />
              {errors.surname && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.surname}</p>}
            </div>
          </div>
        
          <div className="flex flex-col justify-center items-start">
            <label>{t['l5']}: </label>
            {/* <input className="mt-1"
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleInputChange}
            /> */}

            <DatePicker className="text-white bg-black rounded-sm w-full border-2 border-logo-yellow" onChange={(date) => {setForm((prev) => ({...prev, dateOfBirth: date.toString()})); setStartDate(date)}} needConfirm />

            {/* <Datepicker 
            useRange={false}
            asSingle={true}
            value={date} 
            onChange={(date) => {setForm((prev) => ({...prev, dateOfBirth: date.toString()})); setStartDate(date)}}
        />  */}
            {/* <DatePicker selected={startDate} showYearDropdown nextYearButtonLabel=">" previousYearButtonLabel=">"
                        onChange={(date) => {setForm((prev) => ({...prev, dateOfBirth: date.toString()})); setStartDate(date)}} /> */}
            {errors.dateOfBirth && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.dateOfBirth}</p>}
          </div>
        
          <div>
            <label>{t['l6']}: </label>
            <select name="club" value={form.club} onChange={handleInputChange} className="select mt-1">
              <option value="">{t['s2']}</option>
              <option value="Adamas">Adamas</option>
                <option value="Behemot">Behemot</option>
                <option value="Belišće">Belišće</option>
                <option value="Bjelowbar">Bjelowbar</option>
                <option value="Body Art">Body Art</option>
                <option value="Depth Dominators">Depth Dominators</option>
                <option value="Galacticos">Galacticos</option>
                <option value="Gibi Gib Varaždin">Gibi Gib Varaždin</option>
                <option value="Gumeni Medvjedići">Gumeni Medvjedići</option>
                <option value="Kratos">Kratos</option>
                <option value="Liftaonica">Liftaonica</option>
                <option value="Maksimum">Maksimum</option>
                <option value="Nabildani Mozak">Nabildani Mozak</option>
                <option value="Osijek 031">Osijek 031</option>
                <option value="Power Crew">Power Crew</option>
                <option value="Pozoj">Pozoj</option>
                <option value="Rebel Warrior">Rebel Warrior</option>
                <option value="Samo Mišići">Samo Mišići</option>
                <option value="Spiritus Fortis">Spiritus Fortis</option>
                <option value="Srele Brutal Team">Srele Brutal Team</option>
                <option value="Šibenik">Šibenik</option>
                <option value="Štanga">Štanga</option>
                <option value="Taz">Taz</option>
                <option value="Ultimate">Ultimate</option>
                <option value="Virovitica">Virovitica</option>
                <option value="Wild Hogs">Wild Hogs</option>
            </select>
            {errors.club && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.club}</p>}
          </div>

          {/* <div className="flex flex-row justify-start items-center gap-4">
                  <label className="text-lg font-semibold">{t['l11']} </label>
                  <input className="w-min"
                    type="checkbox"
                    name="isInternationalCompetitor"
                    checked={form.isInternationCompetitor}
                    onChange={handleInputChange}
                  />
            </div> */}

          <div className="flex flex-col justify-center items-start">
            <label>{t['l11']}: </label>
            <select name="isIntComp" value={form.isIntComp} onChange={handleInputChange} className="select mt-1">
              <option value="">{t['s7']}</option>
              <option value='Da'>{t['yes']}</option>
              <option value='Ne'>{t['no']}</option>
            </select>

                {errors.isIntComp && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.isIntComp}</p>}
          </div>
        
          <div>
            <p className="mt-12 text-2xl font-semibold">{t['h2']}: </p>
            <p className="italic text-sm mt-2">{t['h2-note']}</p>
          </div>
          <div className="flex flex-col gap-2">
            
            <div className="flex flex-row justify-start items-center gap-4 mt-4">
                <label htmlFor="fullPower" className="font-semibold text-lg">{t['l7']}</label>
                <input className="w-min"
                  type="checkbox"
                  name="fullPower"
                  checked={form.competitionType.fullPower}
                  onChange={handleInputChange}
                />
            </div>
            {form.competitionType.fullPower && (
              <div className="flex flex-col gap-4">
                <div>
                    <label>{t['l71']}: </label>
                    <select
                      name="fullPowerDetails.ageCategory"
                      value={form.fullPowerDetails.ageCategory}
                      onChange={handleInputChange}
                      className="select mt-1"
                    >
                      <option value="">{t['s3']}</option>
                      <option value={t['s31']}>{t['s31']}</option>
                      <option value={t['s32']}>{t['s32']}</option>
                      <option value={t['s33']}>{t['s33']}</option>
                      <option value={t['s34']}>{t['s34']}</option>
                      <option value={t['s35']}>{t['s35']}</option>
                      <option value={t['s36']}>{t['s36']}</option>
                      <option value={t['s37']}>{t['s37']}</option>
                    </select>
                    {errors.fullPowerAgeCategory && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.fullPowerAgeCategory}</p>}
                </div>
        
                <div>
                    <label>{t['l72']}: </label>
                    <select
                      name="fullPowerDetails.weightCategory"
                      value={form.fullPowerDetails.weightCategory}
                      onChange={handleInputChange}
                      className="select mt-1"
                    >
                      <option value="">{t['s4']}</option>
                      {form.gender === t['s12'] && [
                        "-53",
                        "-59",
                        "-66",
                        "-74",
                        "-83",
                        "-93",
                        "-105",
                        "-120",
                        "120+",
                      ].map((weight) => (
                        <option key={weight} value={weight}>
                          {weight == "-53" ? '-53 ' + t['s41'] : weight}
                        </option>
                      ))}
                      {form.gender === t['s14'] && [
                        "-43",
                        "-47",
                        "-52",
                        "-57",
                        "-63",
                        "-69",
                        "-76",
                        "-84",
                        "84+",
                      ].map((weight) => (
                        <option key={weight} value={weight}>
                          {weight == "-43" ? '-43 ' + t['s41'] : weight}
                        </option>
                      ))}
                    </select>
                    {errors.fullPowerWeightCategory && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.fullPowerWeightCategory}</p>}
                    
                </div>
                <div>
                    <label>{t['l73']} </label>
                    <input className="mt-1"
                      type="text"
                      name="fullPowerDetails.bestTotal"
                      value={form.fullPowerDetails.bestTotal}
                      onChange={handleInputChange}
                    />
                    <p className="italic text-sm mt-1">{t['l7-note']}</p>
                </div>
              </div>
            )}
        
            
            <div className="flex flex-row justify-start items-center gap-4 mt-8">
                <label className="font-semibold text-lg">{t['l8']}</label>
                <input className="w-min"
                  type="checkbox"
                  name="benchOnly"
                  checked={form.competitionType.benchOnly}
                  onChange={handleInputChange}
                />
            </div>
            
            {form.competitionType.benchOnly && (
              <div className="flex flex-col gap-4">
                <div>
                    <label>{t['l81']}: </label>
                    <select
                      name="benchOnlyDetails.ageCategory"
                      value={form.benchOnlyDetails.ageCategory}
                      onChange={handleInputChange}
                      className="select mt-1"
                    >
                      <option value="">{t['s3']}</option>
                      <option value={t['s31']}>{t['s31']}</option>
                      <option value={t['s32']}>{t['s32']}</option>
                      <option value={t['s33']}>{t['s33']}</option>
                      <option value={t['s34']}>{t['s34']}</option>
                      <option value={t['s35']}>{t['s35']}</option>
                      <option value={t['s36']}>{t['s36']}</option>
                      <option value={t['s37']}>{t['s37']}</option>
                    </select>
                    {errors.benchOnlyAgeCategory && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.benchOnlyAgeCategory}</p>}
                </div>
        
                <div>
                    <label>Weight Category: </label>
                    <select
                      name="benchOnlyDetails.weightCategory"
                      value={form.benchOnlyDetails.weightCategory}
                      onChange={handleInputChange}
                      className="select mt-1"
                    >
                      <option value="">{t['s4']}</option>
                      {form.gender === t['s12'] && [
                        "-53",
                        "-59",
                        "-66",
                        "-74",
                        "-83",
                        "-93",
                        "-105",
                        "-120",
                        "120+",
                      ].map((weight) => (
                        <option key={weight} value={weight}>
                          {weight == "-53" ? '-53 ' + t['s41'] : weight}
                        </option>
                      ))}
                      {form.gender === t['s14'] && [
                        "-43",
                        "-47",
                        "-52",
                        "-57",
                        "-63",
                        "-69",
                        "-76",
                        "-84",
                        "84+",
                      ].map((weight) => (
                        <option key={weight} value={weight}>
                          {weight == "-43" ? '-43 ' + t['s41'] : weight}
                        </option>
                      ))}
                    </select>
                    {errors.benchOnlyWeightCategory && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.benchOnlyWeightCategory}</p>}
                </div>
        
                <div>
                    <label>{t['l83']}: </label>
                    <input className="mt-1"
                      type="text"
                      name="benchOnlyDetails.bestBenchPress"
                      value={form.benchOnlyDetails.bestBenchPress}
                      onChange={handleInputChange}
                    />
                    <p className="italic text-sm mt-1">{t['l8-note']}</p>
                </div>
              </div>
            )}

{errors.competitionType && <p className="flex flex-row justify-start items-center gap-2 mt-2">
    <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.competitionType}</p>}
          </div>
        
          <h2 className="mt-12 text-2xl font-semibold">{t['h3']}:</h2>

            <div>
                <div className="flex flex-row justify-start items-center gap-4 mt-4">

                  <label className="text-lg font-semibold">{t['l9']} </label>
                  <input className="w-min"
                    type="checkbox"
                    name="photographs"
                    checked={form.photographs}
                    onChange={handleInputChange}
                  />
                </div>
              <div className="mt-1 " >
                {showContent ? (
                  <>
                    <div className="mt-4 border-2 border-logo-yellow p-2 rounded-sm mb-2">
                        <h3 className="font-semibold">{t['fh1']}</h3>   
                        <p className="mt-4">{t['fh2']}</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>{t['fl11']} {t['fl12']}</li>
                            <li>{t['fl21']} {t['fl22']}</li>
                        </ul>                   
                        <p className="mt-4">{t['fh3']}</p>
                        <ul className="list-disc ml-6 mt-2">
                            <li>{t['fl3']}</li>
                            <li>{t['fl4']}</li>
                            <li><span className="font-semibold">{t['fl51']}</span> {t['fl52']}</li>
                            <li><span className="font-semibold">{t['fl61']}</span> {t['fl62']} <a href='https://drive.google.com/drive/folders/1H8xzDgDqhvSqHtIujn-rKKzMo2Q_miTM?usp=sharing' target="_blank" className="underline cursor-pointer text-logo-yellow">{t['fl63']}</a></li>
                            <li><span className="font-semibold">{t['fl71']}</span> {t['fl72']}</li>
                        </ul>   
                    </div>
                    <button className="text-logo-yellow underline cursor-pointer" onClick={togglePhotograph}>{t['less']}</button>
                  </>
                ) : (
                  <button className="text-logo-yellow underline cursor-pointer" onClick={togglePhotograph}>{t['more']}</button>
                )}
              </div>
            </div>
        
            <div>
                <div className="flex flex-row justify-start items-center gap-4">
                  <label className="text-lg font-semibold">{t['l10']} </label>
                  <input className="w-min"
                    type="checkbox"
                    name="tshirt"
                    checked={form.tshirtSelected}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-1 " >
                    {showTshirtContent ? (
                      <>
                        <div className="mt-4 border-2 border-logo-yellow p-2 rounded-sm mb-2">
                            <h3 className="font-semibold">{t['mh1']}</h3>   
                            <p className="mt-4">{t['mp1']}</p>
                            <p className="mt-4">{t['mp2']}</p>
                            <ul className="list-disc ml-6 mt-2">
                                <li>{t['ml1']}</li>
                                <li><span className="font-semibold">{t['ml21']}</span> {t['ml22']}</li>
                                <li><span className="font-semibold">{t['ml31']}</span> {t['ml32']}</li>
                            </ul>                   
                            <p className="mt-4">{t['mp6']}</p>
                        </div>
                        <button className="text-logo-yellow underline cursor-pointer" onClick={toggleTshirt}>{t['less']}</button>
                      </>
                    ) : (
                      <button className="text-logo-yellow underline cursor-pointer" onClick={toggleTshirt}>{t['more']}</button>
                    )}
                  </div>
            </div>

          {form.tshirtSelected && (
            <div className="">
              <div className="flex flex-row justify-between gap-4">
                <div className="w-full">
                  <label>{t['l101']}: </label>
                  <select
                    name="tshirt.cut"
                    value={form.tshirt.cut}
                    onChange={handleInputChange}
                    className="select"
                  >
                    <option value="">{t['s5']}</option>
                    <option value={t['s51']}>{t['s51']}</option>
                    <option value={t['s52']}>{t['s52']}</option>
                  </select>
                  {errors.tshirtCut && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                    <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.tshirtCut}</p>}
                </div>
                
                <div className="w-full">
                  <label>{t['l102']}: </label>
                  <select
                    name="tshirt.size"
                    value={form.tshirt.size}
                    onChange={handleInputChange}
                    className="select"
                  >
                    <option value="">{t['s6']}</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                  {errors.tshirtSize && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                    <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" loading="lazy" />{errors.tshirtSize}</p>}
                </div>
              </div>
              <p className="italic text-sm mt-2">{t['l10-note']}</p>
              
            </div>
          )}

            

          <button type="submit" className="bg-logo-yellow uppercase font-semibold md:text-lg border-2 border-logo-yellow rounded-sm hover:bg-black transition-all duration-400 p-4 mt-8 text-white">{t['btn']}</button>
        
          <div>{message && <p>{message}</p>}</div>

           <div className={`${file ? 'block' : 'hidden'} mt-4`}>
               <h2 className="text-xl font-semibold">{t['reg-closed']}</h2>
               <p className="mt-4">{t['e18']}</p>
            </div>
        </form>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -left-44 -top-4 z-0 overflow-x-hidden'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-24 lg:min-w-32 min-h-24 lg:min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='border-4 border-gold rounded-md p-4 rotate-45 absolute -right-44 bottom-16 z-0'>
            <div className='border-4 border-gold rounded-md p-4'>
                <div className='border-2 border-gold rounded-md p-4'>
                    <div className='border-2 border-gold rounded-md p-4'>
                        <div className='border-[1px] border-gold rounded-md p-4'>
                            <div className='border-[1px] border-gold rounded-md p-4 min-w-24 lg:min-w-32 min-h-24 lg:min-h-32'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CompetitionForm;
