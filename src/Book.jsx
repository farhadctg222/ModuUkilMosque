import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Book = () => {
    const [book,setBook] = useState([])
    console.log(book)
    useEffect(()=>{
        fetch('Book.json')
        .then(res=>res.json())
        .then(data=>setBook(data))
    },[])
    return (
        <div className='  text-center'>
            
            <h1 className='lg:text-5xl md:text-3xl text-4xl  bg-[]'>Islamic Education Book Fair</h1>
            <p className='text-bold mb-5 m-4 text-justify'>Islamic literature, comprising the Quran, Hadith collections, tafsir, and works on Islamic history and jurisprudence, serves as a cornerstone of Muslim scholarship and spiritual growth. The Quran, believed to be the word of God, offers timeless guidance for believers. Hadith collections provide insights into the teachings and actions of Prophet Muhammad (peace be upon him). Tafsir elucidates the Quranic verses, enhancing understanding and application. Biographies of the Prophet and narratives of Islamic history enrich Muslims' appreciation of their heritage and faith. These texts, studied individually or in groups, foster spiritual development, ethical conduct, and a deeper connection to Islam. From personal reflection to academic study, Islamic literature shapes beliefs, practices, and the intellectual tradition of Muslims worldwide, ensuring the preservation and dissemination of Islamic teachings across generations.</p>
            <div className='flex lg:flex-wrap justify-center  gap-4 flex-col '>
                {
                    book.map(book=> <BookCard
                    key={book.id}
                    book={book}>

                    </BookCard>)
                }
            </div>
            
        </div>
    );
};

export default Book;