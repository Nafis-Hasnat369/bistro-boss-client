import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"

const Featured = () => {
    const backgroundImg = {
        backgroundImage: `url(${featuredImg})`,
        backgroundPosition: "center",
    }
    return (
        <div style={backgroundImg} className="text-white bg-fixed pt-8 my-20">
            <SectionTitle heading="---check it out---" subHeading="Featured Item" />
            <div className="md:flex justify-center items-center py-8 px-16 bg-slate-400 bg-opacity-50">
                <div>
                    <img className="rounded-xl" src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-black">
                    <span>March 20, 2023</span>
                    <h3 className="text-xl uppercase my-3">where can i get some?</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ex inventore doloribus
                        provident quas fugiat rerum a at distinctio, labore aspernatur dicta dignissimos autem amet quasi,
                        corrupti iusto architecto possimus?
                    </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5 text-black">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;