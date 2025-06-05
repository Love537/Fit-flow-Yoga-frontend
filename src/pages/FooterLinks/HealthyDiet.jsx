import React from 'react';
import NavBar from '../../components/headers/NavBar';
import Footer from '../../components/footer/Footer';

const tips = [
  {
    title: "Stay Hydrated",
    desc: "Drink at least 8 glasses of water daily to maintain energy and flush toxins.",
  },
  {
    title: "Eat Whole Foods",
    desc: "Focus on fruits, vegetables, lean proteins, nuts, seeds, and whole grains.",
  },
  {
    title: "Balanced Meals",
    desc: "Include carbs, protein, and healthy fats in every meal for optimal fuel.",
  },
  {
    title: "Mindful Eating",
    desc: "Avoid distractions. Eat slowly and stop when 80% full.",
  },
];

const yogaNutrition = [
  {
    title: "Pre-Yoga Nutrition",
    content:
      "Have a light snack 30–60 minutes before your session. Try a banana, almond butter toast, or smoothie for energy.",
  },
  {
    title: "Post-Yoga Recovery",
    content:
      "Refuel within an hour after practice. Include lean protein, whole grains, and vegetables. Example: quinoa bowl with tofu and greens.",
  },
  {
    title: "Foods to Support Flexibility",
    content:
      "Include anti-inflammatory foods like turmeric, ginger, berries, and omega-3s to support joint health and flexibility.",
  },
];

const HealthyDiet = () => {
  return (
    <div className="text-gray-800">
      <NavBar />
      <div className="mt-16"> {/* Adjust this margin if your NavBar is taller/shorter */}

        {/* Hero */}
        <section className="bg-green-100 py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800">Healthy Diet</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">
            Nourish your body and support your yoga lifestyle with balanced nutrition.
          </p>
        </section>

        {/* Tips Section */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">Essential Diet Tips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md border transition-all duration-200">
                <h3 className="text-lg font-bold mb-2 text-green-800">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Yoga Nutrition Section */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-green-700 mb-8">Nutrition for Yoga Practice</h2>
            <div className="space-y-8">
              {yogaNutrition.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-green-700 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Wellness Community</h2>
          <p className="mb-6 text-lg max-w-xl mx-auto">
            Get expert tips, free diet charts, and yoga nutrition guidance delivered weekly.
          </p>
        {/**   <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded hover:bg-green-100 transition">
            Subscribe Now
          </button>
          */}
        </section>

    
      </div>
    </div>
  );
};

export default HealthyDiet;
