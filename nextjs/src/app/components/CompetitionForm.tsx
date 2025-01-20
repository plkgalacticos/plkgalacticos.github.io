'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";
import SheetDB from 'sheetdb-js'

const CompetitionForm = ({t}) => {

  const [file, setFile] = useState(null);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);
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
    setFile("");
    if (validateForm()) {
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
                    "Kroj": form.tshirtSelected && form.tshirt.cut ? form.tshirt.cut : '/', 
                    "Veličina": form.tshirtSelected && form.tshirt.size ? form.tshirt.size : '/' 
          }

          SheetDB.write('https://sheetdb.io/api/v1/wxafnxolcqbw9', { sheet: 'Sheet1', data: sheetForm }).then(function(result){
          }, function(error){
          });

          setMessage(t['e14'])

          if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && form.tshirtSelected) {
            setFile('105.pdf')
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && form.photographs && !form.tshirtSelected) {
            setFile('90.pdf')
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && form.tshirtSelected) {
            setFile('85.pdf')
          } else if (form.competitionType.benchOnly && form.competitionType.fullPower && !form.photographs && !form.tshirtSelected) {
            setFile('70.pdf')
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && form.tshirtSelected) {
            setFile('70.pdf')
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && form.photographs && !form.tshirtSelected) {
            setFile('55.pdf')
          } else if ( (form.competitionType.benchOnly || form.competitionType.fullPower) && !form.photographs && form.tshirtSelected) {
            setFile('50.pdf')
          } else {
            setFile('35.pdf')
          }

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
    <div className="relative flex flex-row justify-center items-center gap-8 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-3xl bg-opaque-purple bg-glow  p-4 lg:p-12 mt-24 z-10">

          <p className="text-2xl font-semibold">{t['h1']}</p>
          <div className="flex flex-col justify-center items-start">
            <label>{t['l1']}: </label>
            <input className="mt-1"
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.email}</p>}
          </div>
        
          <div className="flex flex-col justify-center items-start">
            <label>{t['l2']}: </label>
            <select name="gender" value={form.gender} onChange={handleInputChange} className="select mt-1">
              <option value="">{t['s1']}</option>
              <option value={t['s12']}>{t['s11']}</option>
              <option value={t['s14']}>{t['s13']}</option>
            </select>

                {errors.gender && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.gender}</p>}
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
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.name}</p>}
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
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.surname}</p>}
            </div>
          </div>
        
          <div className="flex flex-col justify-center items-start">
            <label>{t['l5']}: </label>
            <input className="mt-1"
              type="number"
              name="yearOfBirth"
              value={form.yearOfBirth}
              onChange={handleInputChange}
            />
            {errors.yearOfBirth && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.yearOfBirth}</p>}
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
                <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.club}</p>}
          </div>
        
          <p className="mt-12 text-2xl font-semibold">{t['h2']}: </p>
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
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.fullPowerAgeCategory}</p>}
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
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.fullPowerWeightCategory}</p>}
                    
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
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.benchOnlyAgeCategory}</p>}
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
                        <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.benchOnlyWeightCategory}</p>}
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
        
          <p className="mt-12 text-2xl font-semibold">{t['h3']}:</p>

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
                  {errors.tshirtCut && <p className="flex flex-row justify-start items-center gap-2 mt-2">
                    <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.tshirtCut}</p>}
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
                    <img className="w-6 h-auto" src="/icons/warning-sign.svg" alt="WARNING" />{errors.tshirtSize}</p>}
                </div>
              </div>
              <p className="italic text-sm mt-2">{t['l10-note']}</p>
              
            </div>
          )}
        
          <button type="submit" className="bg-logo-yellow uppercase font-semibold md:text-lg border-2 border-logo-yellow rounded-sm hover:bg-black transition-all duration-400 p-4 mt-8 text-white">{t['btn']}</button>
        
          <div>{message && <p>{message}</p>}</div>

           <div className={`${file ? 'block' : 'hidden'} mt-4`}>
               <p className="text-lg">Please dowload the payment slip below.</p>
               <a className={`relative m-auto mt-4 ${file ? 'block' : 'hidden'}`} href={`/docs/${file}`} download={`${file}`}>
                        <div className="button" data-tooltip="Size: 166KB">
                            <div className="button-wrapper">
                              <div className="text font-semibold">
                                <span className="mr-4">
                                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.6em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                </span>{file}</div>

                                <span className="icon">
                                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                                </span>
                            </div>
                        </div>
                </a>
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
