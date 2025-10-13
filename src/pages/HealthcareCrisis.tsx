import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold text-ubuntu-blue-600">
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

const HealthcareCrisis: React.FC = () => {
  const stats = [
    {
      value: 30,
      suffix: "",
      prefix: "",
      label:
        "clinics powered by STONE-HMIS® an in-house health technology system linking community and clinic data for real-time patient tracking and follow-up",
    },
    {
      value: 25,
      suffix: "",
      prefix: "",
      label: "Ubuntu-Afya Kiosks operating across underserved communities",
    },
    {
      value: 250000,
      suffix: "+",
      prefix: "",
      label:
        "people served in the past 3 years, 60% women and children under five",
    },
    {
      value: 60,
      suffix: "%",
      prefix: "",
      label:
        "increase in skilled delivery and postnatal care in our kiosk catchment areas",
    },
    {
      value: 100,
      suffix: "+",
      prefix: "",
      label:
        "health workers trained in evidence-based care and community health delivery",
    },
    
  ];

  return (
    <section className="py-16 bg-ubuntu-blue-50 border-t border-b border-ubuntu-blue-200">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center text-ubuntu-blue-800 mb-8">
          Impact
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-ubuntu-blue-100"
            >
              <Counter
                end={stat.value}
                duration={2000}
                suffix={stat.suffix}
                prefix={stat.prefix}
              />
              
              <div className="text-gray-600 mt-3 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareCrisis;