import openai
from config import OPENAI_API_KEY

class AIService:
    def __init__(self):
        openai.api_key = OPENAI_API_KEY

    def get_ai_response(self, inputText):
        print(f"Getting AI response on: {inputText}.")
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "user", "content": inputText}
            ]
        )

        if response.choices:
            return response.choices[0].message.content.strip()
        else:
            return None

