import { Pool } from 'undici';
import 'dotenv/config';

const googlePool = new Pool('https://generativelanguage.googleapis.com', {
  connections: 5,
});

async function streamGemini(prompt) {
  const apiKey = process.env.API_KEY;
  const model = 'gemini-2.5-flash' //É O 2.5 (passei uns 15 minutos tentando descobrir o modelo)

  const { statusCode, body } = await googlePool.request({
    path: `/v1beta/models/${model}:streamGenerateContent?key=${apiKey}`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    }),
  });

  if (statusCode !== 200){
    await body.dump();
    throw new Error(`Erro na API: ${statusCode}`);
  }

  const decoder = new TextDecoder(); //Decodifica de binário para letras legíveis
  for await (const chunk of body) {
    console.log(decoder.decode(chunk));
  }
}

streamGemini("Escreva 'Olá Mundo' em Java.");