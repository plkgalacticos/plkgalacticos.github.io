'use server';
import { google } from "googleapis";

type SheetForm = {
    email: string,
    gender: string,
    name: string,
    surname: string,
    yearOfBirth: string,
    club: string,
    competitionType: string,
    fullPowerAgeCategory: string,
    fullPowerWeightCategory: string,
    fullPowerBestTotal: string,
    benchOnlyAgeCategory: string,
    benchOnlyWeightCategory: string,
    bestBenchPress: string,
    photographs: string,
    tshirt: string,
    tshirtCut: string, 
    tshirtSize: string

}
export async function getSheetData(form: SheetForm) { 
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: "plk-galacticos@cibalae-open-kup-2025.iam.gserviceaccount.com",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz6IvEde/YoJ+1\n1HYooPa/8Zu2fPzF9Pkie9EfEtLQtM8+Ut0lEriO/t+2kBHl5SauhRe3Ng2ieaJf\nZqIUMxaC1w4lEXB0f8OC7D13DYzUR1wzme1X0DJ/igweGbV8Nc5dGHafYK4Vy6nG\nNCtMGnsJ3FvNP44sBTHDVTkReagzTWLi29XMqHhFe9kCABigg+lVqJ1tH6jy5oY2\ngPrQTjVGA+6crIRMOrSadzW5W1TqLUb2lofPfsGYDh0rTaAaAaXTKu5iqDIGaYTa\nhMtfzC0Tp1L1nMr2fsw3mRpfCxm1X/KPOyDb27Ull+2/hsMInRC8kQPEEt3sMQlX\nMGMeotPHAgMBAAECggEABKF1I4Qdtty922524851QjHJFC3KgnJrk/KDw9mKlEYu\nggucVxyazJ4uxwrLSDHPQfIG/kT0uJ/NVneNr1UnTXgOY/bdFJZcIcw4LpVgQVt3\nfWwAaEWeNrXQ5yLOoxW+71eAnlnxGZVpta4i3m1P9Q+ExUnBvGc5FmR5CbNL2+Zb\nJ+TgnU3Pb/TI72D/7LUsG193hLzN6l1q9yxwWinRnho4mZjFP+rsbJdgMk0fy5sm\nU6pB9vKiKwm8fHA82K8eLesx0HTx2st2dwZ3cA5hu5EuXrzOyob+OfbOkTQ78nRL\niWYj0fr+xqJYNB62Thr1T3bmunN8HyxON1JV7333fQKBgQDcv4o7OHXUCiMwWKfP\nZZVZmUFCBemrLIhCA46LGkfpmBc9+f4opU3Eb2d2RjgO/SBPrRUyBqFzTqpk/xRi\naSctmiUAHu9Ut73pDIHfd+rZSXBXBfo9tH+BzDHFf7SqRu5U4vf/cGrfGQIELKfa\nqxIkW8RMFVZOt+GZ8f99uXcyFQKBgQDQo2xtnkgF6sqq3Xj232XJFimx4jUtZeLF\nZKrGBvubFQGkY/a4GwUeun1Ux3jRyELUxxonen0/bpr27mAMZog4Xa85YQVAqX+u\ntW6/vGyYei6jiz8RhKUVHkCYjUwbzYFGzO2GOe9Yc6L8A5XuI9mFJxxMcjxSm6Nm\nRC/tMGeRawKBgCEJSVazjG6/VaTWn8aaHU/bb7jBycakU4ANqDeJJ1n+OPw9fZv3\noTvUsFczCxCzMTK7ZICoHWF0VGvpANP5iLN6bi8mcgrrtLA7/vPCrpL2OqnLazfw\n22RBevFju1YAZ4qsrRC9ckERLQwS4swG7iAi263HQ7NkMY8oeGQIbZ5BAoGAZvyk\nYx/EcZdKXzlfooz3k2ErR7Ffin9GhyV/3qxHum+OFfV6Lbq4tkhb4WNtUjBGPP3i\n/SXLeWpBeC6Gnthl2Vz1R5+KljaU3kqU1nROLp3xM61ifmU5j8kVHbhxny+75pT1\nklI6wTCjfT7P3XM4xi9eGqYw/J3y9GIoPi6skO0CgYEAjryUTmt2npSJU0L34C8G\ndabzM8v/LkRkb5uUYyN1D+zjiW8rwKyMcQ5KZ2ucktllGHnBNg+u3WQ5gtunHhEo\nQcZuff6Yg+UbLodKcVOc9ur9JV9XZ6dodjHzntMjjS2sI77hSiHSngCKriz/VGKv\nnisiqsR4/Uphrfx3qGUojqU=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\b')
        },
        scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
        ]
    })
    
    console.info('action', form)
    const glSheets = google.sheets({ version: "v4", auth: auth });

    const response = await glSheets.spreadsheets.values.append({
        auth: auth,
        spreadsheetId: "1RT30LjdXtEQGO4ooXSEZMiM5cY8W6CL-Ct4d4Qs-zIU",
        range: 'A1:Q1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [
                [form.email,
                form.gender,
                form.name,
                form.surname,
                form.yearOfBirth,
                form.club,
                form.competitionType,
                form.fullPowerAgeCategory,
                form.fullPowerWeightCategory,
                form.fullPowerBestTotal,
                form.benchOnlyAgeCategory,
                form.benchOnlyWeightCategory,
                form.bestBenchPress,
                form.photographs,
                form.tshirt,
                form.tshirtCut,
                form.tshirtSize]
            ]
        }
    });

    console.info('response', response)

    return true;
}