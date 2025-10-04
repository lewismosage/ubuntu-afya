import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
  prefix?: string;
}

interface PieChartProps {
  percentage: number;
  color: string;
  bgColor: string;
  label: string;
  value: string;
  description: string;
}

const PieChart: React.FC<PieChartProps> = ({ percentage, color, bgColor, label, value, description }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

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
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setAnimatedPercentage(easeOutQuart * percentage);

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
  }, [isVisible, percentage]);

  const strokeDashoffset = circumference * (1 - animatedPercentage / 100);

  return (
    <div ref={ref} className="bg-white p-6 rounded-lg shadow-sm border border-ubuntu-blue-100">
      <h5 className="text-sm font-semibold text-ubuntu-blue-800 mb-4 text-center">
        {label}
      </h5>
      <div className="relative w-32 h-32 mx-auto mb-4">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={bgColor}
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = "", prefix = "" }) => {
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
      {prefix}{count}{suffix}
    </div>
  );
};

const HealthcareCrisis: React.FC = () => {
  const stats = [
    {
      value: 40,
      suffix: "%",
      prefix: "",
      label: "Kenyans lack access to essential health services",
      description: "4 in 10 Kenyans"
    },
    {
      value: 25,
      suffix: "km",
      prefix: "",
      label: "Distance to rural clinics for many families",
      description: "10-30km average"
    },
    {
      value: 5.3,
      suffix: "%",
      prefix: "",
      label: "Children die before age 5 from preventable causes",
      description: "1 in 19 children"
    },
    {
      value: 362,
      suffix: "",
      prefix: "",
      label: "Maternal deaths per 100,000 births",
      description: "Maternal mortality rate"
    }
  ];

  return (
    <section className="py-16 bg-ubuntu-blue-50 border-t border-b border-ubuntu-blue-200">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center text-ubuntu-blue-800 mb-8">
          The Healthcare Crisis in Rural Kenya
        </h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-ubuntu-blue-100">
              <Counter 
                end={stat.value} 
                duration={2000} 
                suffix={stat.suffix} 
                prefix={stat.prefix}
              />
              <div className="text-ubuntu-blue-800 mt-2 text-sm">{stat.description}</div>
              <div className="text-gray-600 mt-3 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Pie Charts Section */}
        <div className="mt-16">
          <h4 className="text-xl font-bold text-center text-ubuntu-blue-800 mb-8">
            Healthcare Access Distribution
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PieChart
              percentage={60}
              color="#005696"
              bgColor="#e5e7eb"
              label="Healthcare Access"
              value="60%"
              description="Have access to healthcare"
            />
            <PieChart
              percentage={85}
              color="#f7931e"
              bgColor="#fef3c7"
              label="Maternal Health"
              value="85%"
              description="Safe deliveries"
            />
            <PieChart
              percentage={94.7}
              color="#005696"
              bgColor="#e5e7eb"
              label="Child Survival"
              value="94.7%"
              description="Children survive to age 5"
            />
            <PieChart
              percentage={30}
              color="#f7931e"
              bgColor="#fef3c7"
              label="Rural Coverage"
              value="30%"
              description="Rural areas with clinics"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareCrisis;
