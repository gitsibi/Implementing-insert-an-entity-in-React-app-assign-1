import React from 'react'

function AddBookForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('The form is submitted successfully');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-xl font-bold mb-4 text-center text-gray-700">Add a New Book</h2>

                <label className="block mb-3">
                    <span className="text-gray-600 font-medium">Title:</span>
                    <input 
                        type="text" 
                        placeholder="Enter the book title" 
                        required 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-gray-600 font-medium">Author:</span>
                    <input 
                        type="text" 
                        placeholder="Enter the author name" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md "
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-gray-600 font-medium">Description:</span>
                    <textarea 
                        placeholder="Enter the book description" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md "
                        rows="3"
                    ></textarea>
                </label>

                <label className="block mb-4">
                    <span className="text-gray-600 font-medium">Cover Image URL:</span>
                    <input 
                        type="text" 
                        placeholder="Enter the image URL" 
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md "
                    />
                </label>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white font-semibold p-2 rounded-md hover:bg-blue-600 transition-all"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddBookForm;
