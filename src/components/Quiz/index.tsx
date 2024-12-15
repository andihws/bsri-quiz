import { useReducer, useState, useEffect } from "react";
import phrases from "../../assets/phrases.json";
import Feminine from "../../assets/Feminine.png";
import Masculine from "../../assets/Masculine.png";

const options = [
    "Almost never true",
    "Rarely True",
    "Less than half the times true",
    "Neutral",
    "More than half the times true",
    "Often True",
    "Almost always true"
];

const getRandomPhrases = (phrases: any, count: number) => {
    const allPhrases = [...phrases["Masculine Items"], ...phrases["Feminine Items"], ...phrases["Neutral Items"]];
    const shuffled = allPhrases.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const Quiz: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState<number[]>(Array(60).fill(-1));
    const [randomPhrases, setRandomPhrases] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);
    const [resultImage, setResultImage] = useState<string>("");

    useEffect(() => {
        setRandomPhrases(getRandomPhrases(phrases, 60));
    }, []);

    const handleOptionChange = (index: number, value: number) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value;
        setSelectedOptions(newSelectedOptions);
    };

    const handleNext = () => {
        if (currentPage < 59) {
            setCurrentPage(currentPage + 1);
        } else {
            setResultImage(Math.random() < 0.5 ? Feminine : Masculine);
            setShowResult(true);
        }
    };

    return (
        <div className="flex flex-col items-center p-6 font-sans">
            {showResult ? (
                <div>
                    <img src={resultImage} alt="Result" />
                </div>
            ) : (
                randomPhrases.length > 0 && (
                    <div className="w-full max-w-md">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                            <div
                                className="bg-blue-500 h-2.5 rounded-full"
                                style={{ width: `${((currentPage + 1) / 60) * 100}%` }}
                            ></div>
                        </div>
                        <p className="mb-4 text-center text-lg">{randomPhrases[currentPage]}</p>
                        {options.map((option, index) => (
                            <label key={index} className="block mb-2">
                                <input
                                    type="radio"
                                    name={`question-${currentPage}`}
                                    value={index}
                                    checked={selectedOptions[currentPage] === index}
                                    onChange={() => handleOptionChange(currentPage, index)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                        <div className="flex justify-between mt-4">
                            {currentPage > 0 && (
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                onClick={handleNext}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                                disabled={selectedOptions[currentPage] === -1}
                            >
                                {currentPage < 59 ? "Next" : "Finish"}
                            </button>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Quiz;