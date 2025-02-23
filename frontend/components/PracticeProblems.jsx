import { useState } from 'react'
import './PracticeProblems.css'

const API_URL = 'https://api.openai.com/v1/chat/completions';

require('dotenv').config();  
const apiKey = process.env.API_KEY;

function PracticeProblems() {

    /* state variables */

    const [questionTopic, setTopic] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [attempted, setAttempted] = useState(false);

    const questionType = 2;
    const questionDifficulty = 1;
    const TEMP = 1.3;

    const [practiceQ, setPracticeQ] = useState({
        askingQuestion: "",
        answerChoices: [],
        correctAnswer: "",
        answerExplanation: "",
    });

    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const scamTypes = [
        "Pharming",
        "Pop up",
        "Malware (Viruses)",
        "Malware (Spyware)",
        "Malware (Trojans)",
        "Malware (Ransomware)",
        "Spoofing (Website)",
        "Spoofing (Caller ID)",
        "Spoofing (Social Media)"
    ];

    /* fetching response */

    async function getPracticeQ() {
        setLoading(true);
        setFetchError(false);
        setShowExplanation(false);
        setSelectedAnswer(null);
        setSubmitted(false);
        setAttempted(false);

        const randomQuestionType = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
        const dynamicDifficulty = (correctCount % 5 > 2) ? 3 : ((correctCount % 5) + 1);

        try {
            let response = await fetchResponse(questionTopic, randomQuestionType, dynamicDifficulty, TEMP);

            setPracticeQ({
                askingQuestion: response.askingQuestion,
                answerChoices: response.answerChoices,
                correctAnswer: response.correctAnswer,
                answerExplanation: response.answerExplanation,
            });
        } catch (error) {
            console.error("Error generating question: please try again.", error);
            setFetchError(true);
        } finally {
            setLoading(false);
        }
    }


    /* handle answers */

    const handleAnswerSelection = (choice) => {
        if (!submitted) {
            setSelectedAnswer(choice);
        }
    };

    const handleSubmit = () => {
        if (selectedAnswer && !submitted) {
            setShowExplanation(true);
            setSubmitted(true);
            setAttempted(true);
            if (selectedAnswer === practiceQ.correctAnswer) {
                setCorrectCount(correctCount + 1);
            }
            setTotalCount(totalCount + 1);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-8 m-auto max-w-lg">
            <button
                onClick={() => window.location.href = '/'}
                className="bg-gray-500 text-white px-4 py-2 rounded mb-2"
            >
                Back
            </button>

            <select
                value={questionTopic}
                onChange={(ev) => setTopic(ev.target.value)}
                className="border p-2 w-full"
            >
                <option value="" disabled>Select Scam Type...</option>
                {scamTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>

            <button
                onClick={getPracticeQ}
                disabled={loading}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 disabled:opacity-50"
            >
                Get Question
            </button>

            <p className="mt-2">Questions Correct: {correctCount} / {totalCount}</p>

            {loading && <p>Loading...</p>}
            {fetchError && <p>Error generating question: please try again.</p>}

            {!fetchError && !loading && practiceQ.askingQuestion && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                    <p><strong>Q:</strong> {practiceQ.askingQuestion}</p>

                    <div className="mb-4">
                        {practiceQ.answerChoices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelection(choice)}
                                className={`w-full text-left p-2 rounded my-1 bg-gray-200 ${submitted && selectedAnswer === choice ? 'opacity-50' : ''}`}
                                disabled={submitted}
                            >
                                {choice}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={submitted || !selectedAnswer}
                        className="bg-green-500 text-white px-4 py-2 rounded mt-2 disabled:opacity-50"
                    >
                        Submit Answer
                    </button>

                    {submitted && (
                        <button
                            onClick={getPracticeQ}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2 ml-2"
                        >
                            Next Question
                        </button>
                    )}

                    {showExplanation && (
                        <div className="mt-4 p-2 bg-gray-200 rounded">
                            {selectedAnswer !== practiceQ.correctAnswer ? (
                                <div>
                                    <p><strong>Incorrect</strong></p>
                                    <p><strong>Correct Answer:</strong> {practiceQ.correctAnswer}</p>
                                </div>
                            ) : (
                                <p><strong>Correct!</strong></p>
                            )}
                            <p><strong>Explanation:</strong> {practiceQ.answerExplanation}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}


async function fetchResponse(topic, type, difficulty, TEMP) {

    /* specifying instructions */

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    };

    /* type of response */

    let bodyContent;
    if (type == 0) {
        bodyContent = `I have the following scam topic: ${topic}. Please provide a short true or false question regarding the scam.
    Its difficulty should be ${difficulty} / 3, where (1/3 = very obvious, 3/3 = very subtle).
    The reponse must be in the JSON format:
    {
      askingQuestion: "True of False: string",
      answerChoices: ["A. True", "B. False"],
      correctAnswer: "A. True" or "B. False",
      answerExplanation: string
    }`;
    }
    else if (type == 1) {
        bodyContent = `I have the following scam topic: ${topic}. Please provide a short practice question regarding the scam with some short answer choices.
        Its difficulty should be ${difficulty} / 3, where (1/3 = very obvious, 3/3 = very subtle).
        The reponse must be in the JSON format:
        {
          askingQuestion: "Multiple Choice: string",
          answerChoices: ["A. string", "B. string", ...],
          correctAnswer: "A. string" or "B. string" or ...,
          answerExplanation: string
        }`;
    }
    else if (type == 2) {
        bodyContent = `I have the following scam topic: ${topic}. Please provide a short practice question regarding the scam.
        The question is a scenario towards me that should be an example of this scam or an example of a different scam.
        Its difficulty should be ${difficulty} / 3, where (1/3 = very obvious, 3/3 = very subtle).
        The reponse must be in the JSON format:
        {
          askingQuestion: "Real Life Scenario: string",
          answerChoices: ["A. This IS an example of a(n) ${topic} scam", "B. This is NOT an example of a(n) ${topic} scam"],
          correctAnswer: "A. This IS an example of a(n) ${topic} scam" or "B. This is NOT an example of a(n) ${topic} scam",
          answerExplanation: string
        }`;
    }
    else {
        bodyContent = `Repond in the JSON format:
        {
          askingQuestion: "Error - invalid type",
          answerChoices: ["Error - invalid type"],
          correctAnswer: "Error - invalid type",
          answerExplanation: "Error - invalid type"
        }`;
    }

    const body = JSON.stringify({
        model: 'gpt-4o',
        messages: [
            {
                role: 'system',
                content: 'You are an educational assistant that generates JSON-formatted practice questions about scams.'
            },
            {
                role: 'user',
                content: `I want a wide range of creative responses`
            },
            {
                role: 'user',
                content: bodyContent
            }
        ],
        temperature: TEMP,
        stream: false
    });

    /* cleaning data */

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: headers,
            body: body
        });

        const data = await response.json();
        console.log(data);
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error("Invalid API response:", data);
            return {
                askingQuestion: "Error in response format",
                answerChoices: [],
                correctAnswer: "Error in response format",
                answerExplanation: "Error in response format"
            };
        }

        const content = data.choices[0].message.content;
        console.log(content);

        const cleanedContent = content.replace(/```json|```/g, '').trim();
        console.log(cleanedContent);

        /* parse the response as JSON */

        let parsedResponse;
        try {
            parsedResponse = JSON.parse(cleanedContent);
        } catch (error) {
            console.error("Error parsing JSON response:", error);
            return {
                askingQuestion: "Error in response format",
                answerChoices: [],
                correctAnswer: "Error in response format",
                answerExplanation: "Error in response format"
            };
        }

        return {
            askingQuestion: parsedResponse.askingQuestion || "No question provided",
            answerChoices: Array.isArray(parsedResponse.answerChoices) ? parsedResponse.answerChoices : [],
            correctAnswer: parsedResponse.correctAnswer || "No explanation provided",
            answerExplanation: parsedResponse.answerExplanation || "No explanation provided"
        };

    } catch (error) {
        console.error('Error:', error);
        return {
            askingQuestion: "Error fetching question",
            answerChoices: [],
            correctAnswer: "Error fetching question",
            answerExplanation: "Error fetching question"
        };
    }
}

export default PracticeProblems;
