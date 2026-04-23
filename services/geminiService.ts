import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateLogs = async (serviceName: string): Promise<string[]> => {
  const ai = getAIClient();
  if (!ai) {
    return [
      `[System] Error: API Key missing. Cannot generate logs for ${serviceName}.`,
      `[System] Please check configuration.`
    ];
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate 5 lines of realistic, raw Linux terminal logs for a service named "${serviceName}" starting up. Include timestamps. Do not include markdown formatting, just the raw text lines.`,
    });
    
    const text = response.text || "";
    return text.split('\n').filter(line => line.trim() !== '');
  } catch (error) {
    console.error("Gemini API Error:", error);
    return [
      `[System] Failed to fetch logs from satellite uplink for ${serviceName}.`,
      `[System] Connection timeout.`
    ];
  }
};
