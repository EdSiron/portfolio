type Props = {
  name: string;
  role: string;
  company: string;
  review: string;
  image: string;
};

const ClientReviewCard = ({ name, role, company, review, image }: Props) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div className="text-[#7849d5] text-4xl mb-4 leading-none">“</div>
        <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
          {review}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <img
          src={image || "https://via.placeholder.com/50"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#7849d5]"
        />
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-[#7849d5] text-sm font-medium">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewCard;
