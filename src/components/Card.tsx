import Button from "./Button";


function Card() {
  return (
    <>
      <div className="flex  bg-white flex-col text-center md:text-left md:flex-row md:justify-center py-9 align-center">
        <div className="bg-white p-8 rounded shadow-md mr-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Studio Package</h2>
          <div className="mt-6 text-3xl font-bold text-gray-900 text-center">
            $29.99
          </div>
          <p className="text-gray-700">
            Ideal for individuals and small projects.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 pb-4">
            <li>Basic equipment included</li>
            <li>Up to 2 hours of studio time</li>
            <li>Standard post-processing</li>
          </ul>
          <div className="text-center"><Button></Button></div>
        </div>

        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Professional Studio Package
          </h2>
          <div className="mt-6 text-3xl font-bold text-gray-900 text-center ">
            $59.99
          </div>
          <p className="text-gray-700">
            Perfect for high-quality productions and advanced needs.
          </p>
          <ul className="mt-4 list-disc list-inside text-gray-700 pb-4">
            <li>Advanced equipment and lighting</li>
            <li>Up to 4 hours of studio time</li>
            <li>Premium post-processing and editing</li>
            <li>Dedicated support</li>
          </ul>
          <div className="md:text-center"><Button></Button></div>
        </div>
      </div>
    </>
  );
}

export default Card;
