import React, { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getProgrammingQue } from '../../../services/operations/programmingAPI';

const ShowDetailQuestion = () => {
    const { questionId } = useParams();
    const [questionData, setQuestionData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuestionDetails = async () => {
            try {
                const response = await getProgrammingQue(questionId);
                setQuestionData(response);
            } catch (error) {
                console.error("Error fetching question details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestionDetails();
    }, [questionId]);

    return (
        <div className="flex min-h-screen">
            {/* Left side - Question Details (40% width) */}
            <div className="w-[40%] p-4 border-r border-gray-300 overflow-y-auto">
                {loading ? (
                    <div>Loading...</div>
                ) : questionData ? (
                    <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold">{questionData.title}</h1>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                                questionData.difficultyLevel === 'Hard' ? 'bg-red-200 text-red-900' :
                                questionData.difficultyLevel === 'Medium' ? 'bg-yellow-200 text-yellow-900' :
                                'bg-emerald-200 text-emerald-900'
                            }`}>
                                {questionData.difficultyLevel || 'Easy'}
                            </span>
                        </div>
                        <div className="prose max-w-none">
                            {questionData.description}
                        </div>
                        {/* Add more question details as needed */}
                        <div className="mt-4">
                            <h3 className="font-semibold">Sample Input:</h3>
                            <pre className="bg-gray-100 p-2 rounded-md">
                                {questionData.sampleInput}
                            </pre>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-semibold">Sample Output:</h3>
                            <pre className="bg-gray-100 p-2 rounded-md">
                                {questionData.sampleOutput}
                            </pre>
                        </div>
                    </div>
                ) : (
                    <div>Question not found</div>
                )}
            </div>

            {/* Right side - IDE Space (60% width) */}
            <div className="w-[60%]">
                <Outlet />
            </div>
        </div>
    );
};

export default ShowDetailQuestion
