const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="space-y-3 w-10/12 mx-auto">
            <h1 className='text-sm text-center text-orange-400 italic'>--{subTitle}--</h1>
            <hr />
            <h1 className='text-2xl text-center uppercase'>{title}</h1>
            <hr />
            <br />
        </div>
    );
};

export default SectionTitle;