'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import SheetDB from 'sheetdb-js'

const CompetitionForm = ({t}) => {

  const [file, setFile] = useState(null);
  const [form, setForm] = useState({
    email: "",
    gender: "",
    name: "",
    surname: "",
    yearOfBirth: "",
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
    tshirt: { cut: "", size: "" }
  });

  const [errors, setErrors] = useState({
        email: '',
        name: '',
        surname: '',
        yearOfBirth: '',
        gender: '',
        club: '',
        competitionType: '',
        fullPowerAgeCategory: '',
        fullPowerWeightCategory: '',
        benchOnlyAgeCategory: '',
        benchOnlyWeightCategory: '',
        tshirtCut: '',
        tshirtSize: ''
  });
  const [message, setMessage] = useState("");

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
        yearOfBirth: '',
        gender: '',
        club: '',
        competitionType: '',
        fullPowerAgeCategory: '',
        fullPowerWeightCategory: '',
        benchOnlyAgeCategory: '',
        benchOnlyWeightCategory: '',
        tshirtCut: '',
        tshirtSize: ''
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) newErrors.email = t['e1'];
    if (!form.name) newErrors.name = t['e2'];
    if (!form.surname) newErrors.surname = t['e3'];
    if (!form.yearOfBirth) newErrors.yearOfBirth = t['e4'];
    if (!form.gender) newErrors.gender = t['e5'];
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

  const sendEmail = () => {
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
                yearOfBirth: form.yearOfBirth,
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
                attachment: file,
              }
            )
            .then(
              () => setMessage(t['e14']),
              (error) => setMessage(t['e15'])
            );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (validateForm()) {
        //   if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && form.tshirtSelected) {
        //     const file = await fetchFile('/docs/105.png')
        //   } else if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && !form.tshirtSelected) {
        //     const file = await fetchFile('/docs/90.png')
        //   } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && form.tshirtSelected) {
        //     const file = await fetchFile('/docs/85.png')
        //   } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && !form.tshirtSelected) {
        //     const file = await fetchFile('/docs/70.png')
        //   } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && form.tshirtSelected) {
        //     const file = await fetchFile('/docs/70.png')
        //   } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && !form.tshirtSelected) {
        //     const file = await fetchFile('/docs/55.png')
        //   } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && !form.photographs && form.tshirtSelected) {
        //     const file = await fetchFile('/docs/50.png')
        //   } else {
        //     const file = 'https://drive.google.com/file/d/1czwGyMalyWcS5kv760i3nK7ls4BueeI4/view?usp=drive_link'//await fetchFile('/docs/35.png')
        //   }

          //sendEmail();
          const sheetForm = {
                    "Email": form.email,
                    "Spol": form.gender,
                    "Ime": form.name,
                    "Prezime": form.surname,
                    "Godina rođenja": form.yearOfBirth,
                    "Klub": form.club,
                    "Tip natjecanja": form.competitionType.benchOnly && form.competitionType.fullPower ? 'Full powerlifting & Bench press only' : form.competitionType.benchOnly ? 'Bench press only' : 'Full powerlifting',
                    "Full power dobna kategorija": form.competitionType.fullPower ? form.fullPowerDetails.ageCategory : '/',
                    "Full power težinska kategorija": form.competitionType.fullPower ? form.fullPowerDetails.weightCategory + ' kg' : '/',
                    "Najbolji total": form.competitionType.fullPower ? form.fullPowerDetails.bestTotal + ' kg' : '/',
                    "Bench only dobna kategorija": form.competitionType.benchOnly ? form.benchOnlyDetails.ageCategory : '/',
                    "Bench only težinska kategorija": form.competitionType.benchOnly ? form.benchOnlyDetails.weightCategory + ' kg' : '/',
                    "Najbolji bench press": form.competitionType.benchOnly ? form.benchOnlyDetails.bestBenchPress + ' kg' : '/',
                    "Fotogragije": form.photographs ? 'Da' : 'Ne',
                    "Majica": form.tshirtSelected ? 'Da' : 'Ne',
                    "Kroj": form.tshirt.cut ? form.tshirt.cut : '/', 
                    "Veličina": form.tshirt.size ? form.tshirt.size : '/' 
          }

          SheetDB.write('https://sheetdb.io/api/v1/wxafnxolcqbw9', { sheet: 'Sheet1', data: sheetForm }).then(function(result){
          }, function(error){
          });

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
    } else {
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

  return (
    <div className="flex flex-row justify-center items-center gap-8 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-md">
          <div>{message && <p>{message}</p>}</div>

          <p className="text-xl font-semibold">{t['h1']}</p>
          <div>
            <label>{t['l1']}: </label>
            <input className="mt-1"
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
        
          <div>
            <label>{t['l2']}: </label>
            <select name="gender" value={form.gender} onChange={handleInputChange} className="select mt-1">
              <option value="">{t['s1']}</option>
              <option value={t['s12']}>{t['s11']}</option>
              <option value={t['s14']}>{t['s13']}</option>
            </select>
            {errors.gender && <p>{errors.gender}</p>}
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
              {errors.name && <p>{errors.name}</p>}
            </div>
            
            <div className="w-full">
              <label>{t['l4']}: </label>
              <input className="mt-1"
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleInputChange}
              />
              {errors.surname && <p>{errors.surname}</p>}
            </div>
          </div>
        
          <div>
            <label>{t['l5']}: </label>
            <input className="mt-1"
              type="number"
              name="yearOfBirth"
              value={form.yearOfBirth}
              onChange={handleInputChange}
            />
            {errors.yearOfBirth && <p>{errors.yearOfBirth}</p>}
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
            {errors.club && <p>{errors.club}</p>}
          </div>
        
          <p className="mt-12 text-xl font-semibold">{t['h2']}: </p>
          <div className="flex flex-col gap-2">
            
            <div className="flex flex-row justify-start items-center gap-4 mt-4">
                <label htmlFor="fullPower" className="font-semibold">{t['l7']}</label>
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
                    {errors.fullPowerAgeCategory && <p>{errors.fullPowerAgeCategory}</p>}
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
                    {errors.fullPowerWeightCategory && <p>{errors.fullPowerWeightCategory}</p>}
                    
                </div>
                <div>
                    <label>{t['l73']} </label>
                    <input className="mt-1"
                      type="number"
                      name="fullPowerDetails.bestTotal"
                      step="0.5"
                      value={form.fullPowerDetails.bestTotal}
                      onChange={handleInputChange}
                    />
                    <p className="italic text-sm mt-1">{t['l7-note']}</p>
                </div>
              </div>
            )}
        
            
            <div className="flex flex-row justify-start items-center gap-4 mt-4">
                <label className="font-semibold">{t['l8']}</label>
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
                    {errors.benchOnlyAgeCategory && <p>{errors.benchOnlyAgeCategory}</p>}
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
                    {errors.benchOnlyWeightCategory && <p>{errors.benchOnlyWeightCategory}</p>}
                </div>
        
                <div>
                    <label>{t['l83']}: </label>
                    <input className="mt-1"
                      type="number"
                      name="benchOnlyDetails.bestBenchPress"
                      step="0.5"
                      value={form.benchOnlyDetails.bestBenchPress}
                      onChange={handleInputChange}
                    />
                    <p className="italic text-sm mt-1">{t['l8-note']}</p>
                </div>
              </div>
            )}
          </div>
        
          <p className="mt-12 text-xl font-semibold">{t['h3']}:</p>

          <div className="flex flex-row justify-start items-center gap-4 mt-4">
            <label>{t['l9']} </label>
            <input className="w-min"
              type="checkbox"
              name="photographs"
              checked={form.photographs}
              onChange={handleInputChange}
            />
          </div>
        
            <div className="flex flex-row justify-start items-center gap-4">
              <label className="">{t['l10']} </label>
              <input className="w-min"
                type="checkbox"
                name="tshirt"
                checked={form.tshirtSelected}
                onChange={handleInputChange}
              />
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
                  {errors.tshirtCut && <p>{errors.tshirtCut}</p>}
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
                  {errors.tshirtSize && <p>{errors.tshirtSize}</p>}
                </div>
              </div>
              <p className="italic text-sm mt-2">{t['l10-note']}</p>
              
            </div>
          )}
        
          <button type="submit" className="bg-logo-yellow md:text-lg btn-diagonal-swipe max-md:px-4 max-md:py-2 mt-8 text-white">{t['btn']}</button>
        </form>
    </div>
  );
};

export default CompetitionForm;
