const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto text-center m-10 md:w-1/4'>
            <span className='text-orange-400 italic'>{heading}</span>
            <h2 className='uppercase text-3xl m-5 py-3 border-y-4'>{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;