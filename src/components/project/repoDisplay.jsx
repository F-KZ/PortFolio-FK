import Image from 'next/image';


export const Projet = ({ nom, img, url }) => {
    return (
        <div className="h-[260px] max-w-[236px] mb-7 flex-nowrap justify-between items-center flex-col ">
        <a href={url}>
            <div className="w-[260px] rounded-xl h-full">
                <div>
                    <Image src={img}
                        alt=""
                        className="object-cover"
                        height={112} width={195} />
                </div>
                <h2>{nom}</h2>
            </div>
        </a>
    </div>
    );
  };