// resume/page.tsx
"use client";

import React from 'react';

const Resume = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold mb-4">Resume</h1>
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    <a
                        href="/EmmanuelSalcedoResume.pdf"
                        download
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="w-full h-[63vh] lg:h-[115vh] overflow-hidden">
                    <iframe
                        src="/EmmanuelSalcedoResume.pdf"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Resume;
