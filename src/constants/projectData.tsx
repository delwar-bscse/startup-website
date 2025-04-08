import { Project } from "@/types/types";
import project_01 from "@/assets/projects/project_01.png";
import project_02 from "@/assets/projects/project_02.png";
import project_03 from "@/assets/projects/project_03.png";
import project_04 from "@/assets/projects/project_04.png";
import project_05 from "@/assets/projects/project_05.png";
import project_06 from "@/assets/projects/project_06.png";
import project_07 from "@/assets/projects/project_07.png";
import project_08 from "@/assets/projects/project_08.png";

import ourStory_01 from "@/assets/projects/single_project/ourStory_01.png";
import ourStory_02 from "@/assets/projects/single_project/ourStory_02.png";
import ourStory_03 from "@/assets/projects/single_project/ourStory_03.png";
import ourMission_01 from "@/assets/projects/single_project/ourMission_01.png";
import ourMission_02 from "@/assets/projects/single_project/ourMission_02.png";
import ourVission_01 from "@/assets/projects/single_project/ourVission_01.png";


export const projectDatas: Project[] = [
  {
    id: 1,
    name: "A New Super Car on Your Wrist",
    startedDate: "27 Jan 2025",
    target: 3600,
    raised: 2300,
    left: 20,
    img: project_01,
    ourStory: {
      title: "Our Story",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To create a vibrant and diverse food destination that brings together local flavors, fosters community connections, and provides a unique dining experience for all. We aim to offer a variety of food options that cater to every taste and dietary preference while ensuring a welcoming atmosphere where people can enjoy great food, live entertainment, and social interaction.",
      lists: [
        "Diverse Food Offerings: Featuring 10+ food vendors with global cuisines, vegan, gluten-free, and fast casual options.",
        "Community Engagement: Providing a gathering space for locals and visitors to connect, relax, and enjoy a lively atmosphere.",
        "Unique Experience: Combining delicious food with live music, events, and a casual, outdoor dining environment."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Fundraising & Vendor Recruitment",
          des: "Fundraising and Selecting Vendors Raise funds to finance the setup and operation. This could involve personal savings, investors, or crowdfunding. Simultaneously, recruit a variety of food vendors, establishing clear agreements and setting operational standards."
        },
        {
          id: 2,
          status: true,
          title: "Planning & Design",
          des: "Designing the Space and Business Plan. Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency"
        },
        {
          id: 3,
          status: true,
          title: "Conceptualization & Market Research",
          des: "Designing the Space and Business Plan. Develop a comprehensive business plan, create a layout for the street court, and obtain necessary permits. Design your space to ensure maximum customer satisfaction and operational efficiency"
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 2,
    name: "Revolutionary Tech for Education",
    startedDate: "15 Mar 2025",
    target: 5000,
    raised: 3000,
    left: 15,
    img: project_02,
    ourStory: {
      title: "Our Story",
      desc: "Our platform started as a dream to make education accessible and engaging for everyone. We wanted to provide students with the tools they need to excel while connecting educators with powerful resources.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "Our vision is to revolutionize education by offering innovative solutions that promote creativity, critical thinking, and collaboration, ensuring that students from all backgrounds can succeed.",
      lists: [
        "Innovative Learning Tools: Providing students with personalized and engaging learning experiences.",
        "Global Access: Ensuring students from all over the world have access to quality education.",
        "Community Support: Offering platforms for educators and students to connect and share resources."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Platform Development",
          des: "Develop a user-friendly platform that can cater to a diverse range of learning styles, including video tutorials, quizzes, and interactive features."
        },
        {
          id: 2,
          status: true,
          title: "Content Expansion",
          des: "Expand our content library to include courses in various fields, from technology to arts and humanities, ensuring that students have access to top-quality educational materials."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 3,
    name: "Eco-Friendly Urban Farming",
    startedDate: "1 Apr 2025",
    target: 2000,
    raised: 1200,
    left: 8,
    img: project_03,
    ourStory: {
      title: "Our Story",
      desc: "Our mission started with a commitment to sustainable agriculture and urban living. We want to transform cities into greener, more self-sustaining places by providing people with the knowledge and tools to grow their own food.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "We envision a world where cities are thriving ecosystems, with rooftop gardens, urban farms, and green spaces that help people reconnect with nature.",
      lists: [
        "Sustainable Farming: Empowering urban dwellers to grow their own food and reduce their carbon footprint.",
        "Community Engagement: Offering workshops and resources to encourage sustainable living practices.",
        "Local Produce: Supporting local food networks by promoting homegrown products."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Urban Farming Initiatives",
          des: "Launch urban farming projects in key locations around the city to promote sustainability and offer local food options."
        },
        {
          id: 2,
          status: true,
          title: "Partnerships & Collaborations",
          des: "Partner with local governments and organizations to promote eco-friendly farming and provide education to urban residents."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 4,
    name: "Next-Gen VR Gaming Platform",
    startedDate: "10 Feb 2025",
    target: 7000,
    raised: 4000,
    left: 12,
    img: project_04,
    ourStory: {
      title: "Our Story",
      desc: "The future of gaming is here. Our VR platform is designed to provide gamers with the most immersive and innovative experience possible.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "We aim to push the boundaries of virtual reality, making it an integral part of daily life and entertainment.",
      lists: [
        "Immersive Gameplay: Creating the most realistic and exciting gaming experiences.",
        "Virtual Worlds: Building expansive, interactive worlds for players to explore.",
        "Community Connection: Bringing gamers together in an unprecedented way."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "VR Hardware Development",
          des: "Develop next-gen VR hardware to make immersive gaming experiences more accessible and affordable."
        },
        {
          id: 2,
          status: true,
          title: "Game Creation",
          des: "Create a diverse range of games, from fantasy to sci-fi and beyond, that offer unparalleled experiences in the virtual world."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 5,
    name: "Smart Wearables for Health",
    startedDate: "5 Feb 2025",
    target: 3000,
    raised: 1800,
    left: 18,
    img: project_05,
    ourStory: {
      title: "Our Story",
      desc: "We set out to create wearable technology that could change the way people approach their health and wellness. Our devices monitor health metrics and provide actionable insights.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To help people live healthier, more active lives by leveraging technology to track and optimize their wellness.",
      lists: [
        "Health Monitoring: Providing real-time data on heart rate, sleep patterns, and physical activity.",
        "Personalized Insights: Offering tailored recommendations for improving health and fitness.",
        "Accessibility: Ensuring that everyone has access to affordable, effective wearable health technology."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Wearable Technology Development",
          des: "Develop smart wearables that seamlessly integrate with users' daily lives while offering powerful health insights."
        },
        {
          id: 2,
          status: true,
          title: "Data Analytics & Insights",
          des: "Leverage data science to provide users with personalized recommendations based on their health metrics."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 6,
    name: "AI-Powered Personal Assistant",
    startedDate: "12 Mar 2025",
    target: 6000,
    raised: 3200,
    left: 22,
    img: project_06,
    ourStory: {
      title: "Our Story",
      desc: "The idea for our AI assistant was born from a desire to streamline daily tasks and increase productivity. We aim to provide a digital companion that learns and adapts to your needs.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "Our vision is to create an intelligent assistant that seamlessly integrates into people's lives, making everyday tasks easier and more efficient.",
      lists: [
        "Personalization: Tailoring the assistant's responses and actions based on individual preferences.",
        "Productivity Boost: Helping users stay organized and focused throughout their day.",
        "Multi-Platform Support: Ensuring that the assistant is available across a variety of devices and platforms."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "AI Model Training",
          des: "Train the AI models to understand and predict user preferences, allowing the assistant to offer customized help."
        },
        {
          id: 2,
          status: true,
          title: "Cross-Platform Integration",
          des: "Ensure the assistant works seamlessly across various platforms, from smartphones to smart home devices."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 7,
    name: "Virtual Home Design App",
    startedDate: "18 Mar 2025",
    target: 4500,
    raised: 2500,
    left: 19,
    img: project_07,
    ourStory: {
      title: "Our Story",
      desc: "We wanted to create a virtual home design tool that would help people visualize and experiment with different interior design styles, all from the comfort of their homes.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To make home design accessible to everyone, allowing people to experiment and create their dream spaces easily and affordably.",
      lists: [
        "Virtual Reality Integration: Offering users the ability to design and explore their spaces in 3D.",
        "Real-time Customization: Providing tools that allow users to instantly adjust design elements to fit their style.",
        "Guided Inspiration: Helping users discover new ideas based on their preferences."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "User Interface Design",
          des: "Create a simple and intuitive interface that makes the design process easy and enjoyable."
        },
        {
          id: 2,
          status: true,
          title: "3D Modeling & Virtual Tools",
          des: "Develop the 3D modeling features that allow users to visualize furniture, lighting, and more."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 8,
    name: "Automated Grocery Delivery Service",
    startedDate: "1 Apr 2025",
    target: 4000,
    raised: 2200,
    left: 13,
    img: project_08,
    ourStory: {
      title: "Our Story",
      desc: "We realized that grocery shopping could be more efficient and convenient. Our service automates the entire process, from choosing items to delivery.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "Our goal is to make grocery shopping effortless by delivering fresh produce and everyday essentials directly to your doorstep.",
      lists: [
        "Seamless Shopping Experience: Offering customers an easy-to-use platform to shop for groceries.",
        "Fresh & Sustainable Products: Providing high-quality, fresh groceries while supporting sustainable farming practices.",
        "Timely Delivery: Ensuring fast and reliable delivery to customers' homes."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Product Sourcing",
          des: "Source high-quality, sustainable products that meet the needs of our customers."
        },
        {
          id: 2,
          status: true,
          title: "Logistics & Delivery Optimization",
          des: "Streamline our logistics process to ensure timely and efficient delivery of groceries."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 9,
    name: "AI-Powered Healthcare Assistant",
    startedDate: "1 Apr 2025",
    target: 5000,
    raised: 1800,
    left: 10,
    img: project_01,
    ourStory: {
      title: "Our Story",
      desc: "We aim to develop an AI healthcare assistant that helps users monitor their health, get medication reminders, and track symptoms.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To improve health outcomes by making healthcare more accessible and personalized through AI-driven assistance.",
      lists: [
        "Health Monitoring: Track vital signs and health data in real-time.",
        "Personalized Insights: Provide tailored health tips and medication reminders.",
        "Accessibility: Offer affordable and easily accessible healthcare support."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "AI Integration",
          des: "Leverage AI to interpret health data and provide personalized insights."
        },
        {
          id: 2,
          status: true,
          title: "Partnerships with Healthcare Providers",
          des: "Collaborate with healthcare organizations to integrate the assistant with existing healthcare systems."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 10,
    name: "Smart Kitchen Appliances",
    startedDate: "15 Feb 2025",
    target: 8000,
    raised: 4500,
    left: 12,
    img: project_02,
    ourStory: {
      title: "Our Story",
      desc: "We believe in the power of smart technology to make everyday tasks easier. Our range of smart kitchen appliances helps streamline cooking while ensuring efficiency and safety.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "Our goal is to bring smart technology into every home, making kitchens more efficient, safe, and enjoyable.",
      lists: [
        "Intuitive Controls: Easy-to-use appliances with voice and app-controlled functionality.",
        "Energy Efficiency: Reducing energy usage while maintaining high performance.",
        "Time-Saving: Helping users cook faster without compromising on quality."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Product Development",
          des: "Design and manufacture smart appliances that make kitchen tasks more efficient."
        },
        {
          id: 2,
          status: true,
          title: "Integration with Smart Home Systems",
          des: "Ensure seamless integration with existing smart home ecosystems."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 11,
    name: "Wireless Charging Solutions",
    startedDate: "5 Apr 2025",
    target: 2000,
    raised: 1500,
    left: 7,
    img: project_03,
    ourStory: {
      title: "Our Story",
      desc: "We are dedicated to making charging devices more convenient and wireless. Our solutions aim to eliminate the hassle of tangled cords and provide fast, efficient charging.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To revolutionize the way people charge their devices by offering reliable and efficient wireless charging technology.",
      lists: [
        "Fast Charging: Reducing charging times while maintaining device safety.",
        "Multi-Device Support: Supporting a wide range of devices simultaneously.",
        "Seamless Integration: Providing easy-to-use, aesthetically pleasing designs."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Wireless Charging Station Design",
          des: "Develop efficient and high-speed wireless charging stations that support multiple devices."
        },
        {
          id: 2,
          status: true,
          title: "Battery Optimization",
          des: "Optimize charging speeds and battery health for longer-lasting performance."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 12,
    name: "Home Automation System",
    startedDate: "1 Apr 2025",
    target: 10000,
    raised: 5500,
    left: 5,
    img: project_04,
    ourStory: {
      title: "Our Story",
      desc: "Our home automation system allows homeowners to control their lights, security systems, and appliances from anywhere in the world.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To create smarter homes that provide greater convenience, energy efficiency, and security for homeowners.",
      lists: [
        "Automation: Automate daily tasks to make life easier.",
        "Security: Enhance home security with remote monitoring and control.",
        "Energy Efficiency: Save on energy costs through optimized smart devices."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Smart Device Integration",
          des: "Create a seamless ecosystem of connected smart devices for every part of the home."
        },
        {
          id: 2,
          status: true,
          title: "Security Features",
          des: "Integrate state-of-the-art security features to protect homeowners."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 13,
    name: "3D Printing Solutions",
    startedDate: "10 Feb 2025",
    target: 4000,
    raised: 2500,
    left: 8,
    img: project_05,
    ourStory: {
      title: "Our Story",
      desc: "We specialize in 3D printing solutions that allow businesses and individuals to create custom, high-quality products and prototypes.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To revolutionize manufacturing and design by enabling more people to create complex, customized products efficiently.",
      lists: [
        "Customization: Allowing for tailored designs and prototypes.",
        "Efficiency: Reducing waste and increasing the speed of production.",
        "Accessibility: Making 3D printing accessible for all businesses and individuals."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "Product Development",
          des: "Develop cutting-edge 3D printing solutions that are both affordable and easy to use."
        },
        {
          id: 2,
          status: true,
          title: "Educational Outreach",
          des: "Promote 3D printing as an accessible tool for design, education, and innovation."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 14,
    name: "Digital Health Solutions",
    startedDate: "18 Mar 2025",
    target: 7000,
    raised: 3500,
    left: 10,
    img: project_06,
    ourStory: {
      title: "Our Story",
      desc: "We believe that digital health solutions can transform healthcare by making care more personalized, accessible, and effective for everyone.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To empower individuals to take control of their health with digital tools that offer actionable insights and improve outcomes.",
      lists: [
        "Personalized Health Data: Providing data-driven insights to optimize health.",
        "Remote Monitoring: Enabling healthcare professionals to monitor patients remotely.",
        "Increased Accessibility: Making healthcare more available to underserved communities."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "AI Integration in Healthcare",
          des: "Leverage artificial intelligence to provide predictive health insights."
        },
        {
          id: 2,
          status: true,
          title: "Remote Patient Monitoring",
          des: "Develop systems that allow for efficient and accurate remote patient care."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  },
  {
    id: 15,
    name: "Robotic Process Automation for Businesses",
    startedDate: "25 Apr 2025",
    target: 12000,
    raised: 7000,
    left: 6,
    img: project_07,
    ourStory: {
      title: "Our Story",
      desc: "We aim to help businesses automate repetitive tasks and processes using robotic process automation (RPA), freeing up resources for more strategic work.",
      imgs: [ourStory_01, ourStory_02, ourStory_03]
    },
    ourVision: {
      title: "Our Vision",
      desc: "To help businesses increase productivity and efficiency by embracing automation technologies.",
      lists: [
        "Automation Tools: Develop RPA tools that streamline business processes.",
        "Cost Reduction: Help businesses save money by reducing the need for manual labor.",
        "Scalability: Enable businesses to scale efficiently through automation."
      ],
      imgs: [ourVission_01]
    },
    ourMission: {
      title: "Our Mission",
      state: [
        {
          id: 1,
          status: true,
          title: "RPA Tool Development",
          des: "Create user-friendly RPA tools that businesses can easily implement."
        },
        {
          id: 2,
          status: true,
          title: "Automation Training",
          des: "Offer training programs to help businesses integrate automation into their workflows."
        }
      ],
      imgs: [ourMission_01, ourMission_02],
    }
  }
];
