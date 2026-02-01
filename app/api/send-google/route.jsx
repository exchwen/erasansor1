import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // Senin Google Apps Script URL'in
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwgD_m6wVcgfNnlRiHQ5qcfUIVNki8EMUGpv1Y_0u1t8tpbguPxFTIgF-QAto62Ozo6/exec";

    // Sunucudan (Next.js) Sunucuya (Google) istek atıyoruz
    // Bu sayede CORS hatası oluşmaz.
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
        return NextResponse.json({ success: true, message: "Gönderildi" });
    } else {
        return NextResponse.json({ success: false, message: "Google Hatası" }, { status: 500 });
    }

  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
