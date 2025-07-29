//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

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write a haiku about ai"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));

import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a one-sentence bedtime story about a unicorn."
});

console.log(response.output_text);