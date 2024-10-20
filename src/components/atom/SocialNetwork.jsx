import clsx from "clsx";

/**
 *
 * @param socialNetworks {{url: string, name: string, icon: React.ReactElement}[]}
 * @param className string
 * @constructor
 */
export const SocialNetworks = ({ socialNetworks, className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      {socialNetworks.map(({ url, name, icon }) => (
        <a
          key={url}
          href={url}
          rel="nofollow"
          className="text-primary text flex items-center gap-1 text-base"
        >
          {icon} <span>{name}</span>
        </a>
      ))}
    </div>
  );
};
