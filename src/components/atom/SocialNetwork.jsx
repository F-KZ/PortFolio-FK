
import { SOCIAL_NETWORKS } from "../../lib/config";
/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks }) => {
  return (
    <div className="flex flex-row gap-8">
    {SOCIAL_NETWORKS.map(({ url, icon }) => (
      <a
        key={url}
        href={url}
        rel="nofollow"
        className="inline-flex items-center justify-center w-10 h-10 border-2 border-lime-400 rounded-full text-[20px] text-lime-400 mx-2 transition duration-500 hover:bg-lime-400 hover:text-[#1f242d] hover:shadow-[0_0_10px_rgba(124,240,61,1)]"
      >
        {icon}
      </a>
    ))}
  </div>
  );
};
