import featuredImg from '../assets/home/featured.jpg'
import SectionTitle from '../components/SectionTitle';
import '../Styles/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-8 my-6">
            <div className='bg-slate-500/80 text-white mb-4'>
            <SectionTitle subTitle="check it out" title="Featured Item" ></SectionTitle>
            </div>
            <div className="lg:flex text-white justify-center items-center bg-slate-500/80 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="btn text-white btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;