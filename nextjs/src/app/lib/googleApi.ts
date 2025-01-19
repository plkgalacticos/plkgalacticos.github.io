// import { NextApiRequest, NextApiResponse } from "next";
// import {google} from 'googleapis'

// type SheetForm = {
//     email: string,
//     gender: string,
//     name: string,
//     surname: string,
//     yearOfBirth: string,
//     club: string,
//     competitionType: string,
//     fullPowerAgeCategory: string,
//     fullPowerWeightCategory: string,
//     fullPowerBestTotal: string,
//     benchOnlyAgeCategory: string,
//     benchOnlyWeightCategory: string,
//     bestBenchPress: string,
//     photographs: string,
//     tshirt: string,
//     tshirtCut: string, 
//     tshirtSize: string
// }
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if(req.method !== 'POST') {
//         console.log('Not post')
//         return res.status(405)
//     }

//     const body = req.body as SheetForm
//     console.log('post')
//     try {
//         const auth = new google.auth.GoogleAuth({
//             credentials: {
//                 client_email: process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\b')
//             },
//             scopes: [
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets',
//             ]
//         })
        
//         const sheet = google.sheets({version: 'v4', auth})
        
//         const response = await sheet.spreadsheets.values.append({
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range: 'A1:Q1',
//             valueInputOption: 'USER_ENTERED',
//             requestBody: {
//                 values: [
//                     body.email,
//                     body.gender,
//                     body.name,
//                     body.surname,
//                     body.yearOfBirth,
//                     body.club,
//                     body.competitionType,
//                     body.fullPowerAgeCategory,
//                     body.fullPowerWeightCategory,
//                     body.fullPowerBestTotal,
//                     body.benchOnlyAgeCategory,
//                     body.benchOnlyWeightCategory,
//                     body.bestBenchPress,
//                     body.photographs,
//                     body.tshirt,
//                     body.tshirtCut,
//                     body.tshirtSize
//                 ]
//             }
//         });

//         return res.status(200).json({
//             data: response.data
//         })
        
//     } catch (e) {
//        return res.status(500).send({message: e.message ?? 'Something went wrong.'} )
//     }
// }