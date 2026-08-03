const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema(
  {
    image: { type: String, default: "" },
    publicId: { type: String, default: "" },
    name: { type: String, trim: true, default: "" },
    title: { type: String, trim: true, default: "" },
    bio: { type: String, trim: true, default: "" },
    quote: { type: String, trim: true, default: "" },
  },
  { _id: false },
);

const aboutPageSchema = new mongoose.Schema(
  {
    whoWeAre: {
      label: { type: String, trim: true, default: "Who We Are" },
      heading: {
        type: String,
        trim: true,
        default: "A trusted government contractor since 2012",
      },
      body: {
        type: String,
        trim: true,
        default:
          "M/S. MD. RAKIB HASAN is a 1st Class Government Contractor, Supplier, General Merchant and Auctioneer, established in 2012 as a sole proprietorship under Md. Rakib Hasan. We are enlisted with numerous government departments, including the Education Engineering Department, Health Engineering Department, Public Works Department, Bangladesh Agricultural Development Corporation, Directorate General of Food and the Forest Department.\nHeadquartered at House-320, Road-21, New DOHS, Mohakhali, Dhaka-1206, with our registered office in Premchara, Bagherpara, Jashore, we hold valid Trade License, TIN and VAT (BIN) registrations along with DCCI and JCCI membership.",
      },
      image: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    mission: {
      label: { type: String, trim: true, default: "Our Mission" },
      heading: {
        type: String,
        trim: true,
        default: "Understanding needs, delivering results",
      },
      body: {
        type: String,
        trim: true,
        default:
          "Each project we undertake has a unique approach. We strive to understand our clients' needs, objectives and expectations, comparing them against what works best to deliver a highly customized service that helps our clients succeed. Every member of our team works toward one common goal: building strong, genuine and lasting relationships with the government bodies and institutions we serve.",
      },
    },
    vision: {
      label: { type: String, trim: true, default: "Our Vision" },
      heading: {
        type: String,
        trim: true,
        default: "Sustainable growth built on trust and quality",
      },
      body: {
        type: String,
        trim: true,
        default:
          "Our journey has never been an easy one — we have faced many difficulties and our vision has met resistance at every step of the way. But we have learned perseverance and resilience, and over the years we have never lost the enthusiasm and passion that drives our sustainable growth. We envision continuing to help government departments and institutions move forward, without ever compromising on quality.",
      },
    },
    ourStory: {
      label: { type: String, trim: true, default: "Our Story" },
      heading: {
        type: String,
        trim: true,
        default: "From 2012 to a trusted name in government supply",
      },
      body: {
        type: String,
        trim: true,
        default:
          "Founded in 2012 by Md. Rakib Hasan, M/S. MD. RAKIB HASAN began as a general merchant and supplier and has grown into a 1st Class Government Contractor and Auctioneer enlisted with departments across Bangladesh. Over the years we have successfully completed projects for the Bangladesh Agricultural Development Corporation, Forest Department, Directorate General of Food, Public Works Department, BGB battalions, and district police and administration offices, among others.\nWith Export/Import Registration Certificates, Fire Service and Acid Use certification, and DCCI/JCCI membership in place, we continue to expand our capacity while maintaining the quality and integrity that has defined our work since day one.",
      },
      image: { type: String, default: "" },
      publicId: { type: String, default: "" },
    },
    team: {
      type: [teamMemberSchema],
      default: () => [
        {
          name: "Md. Rakib Hasan",
          title: "Proprietor",
          bio: "Founder and proprietor of M/S. MD. RAKIB HASAN since 2012, leading the company's government contracting, supply and auctioneering operations with a focus on trust, quality and long-term relationships.",
          quote:
            "We have never compromised on quality, and we have developed an effective workflow that helps the institutions we serve leap forward.",
        },
        {
          name: "Md. Tariq Al Karim",
          title: "Assistant Executive Officer",
          bio: "Oversees day-to-day project execution and coordination across our enlisted government departments and ongoing supply contracts.",
        },
        {
          name: "Emam Sharif",
          title: "Personal Secretary",
          bio: "Manages correspondence, documentation and scheduling for the proprietor's office, ensuring smooth communication with clients and departments.",
        },
      ],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("AboutPage", aboutPageSchema);
