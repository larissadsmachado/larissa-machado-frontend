import { motion } from 'framer-motion';
import { Check, ArrowRight, Clock, Layers, RefreshCw, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Landing Pages',
      price: 'R$ 600',
      description: t('services.landing.description'),
      features: [
        t('services.landing.feature1'),
        t('services.landing.feature2'),
        t('services.landing.feature3'),
        t('services.landing.feature4'),
      ],
      process: [
        { icon: Clock, text: t('services.landing.process1') },
        { icon: Layers, text: t('services.landing.process2') },
        { icon: Zap, text: t('services.landing.process3') },
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Sites Portfólio',
      price: 'R$ 800',
      description: t('services.portfolio.description'),
      features: [
        t('services.portfolio.feature1'),
        t('services.portfolio.feature2'),
        t('services.portfolio.feature3'),
        t('services.portfolio.feature4'),
      ],
      process: [
        { icon: Clock, text: t('services.portfolio.process1') },
        { icon: Layers, text: t('services.portfolio.process2') },
        { icon: RefreshCw, text: t('services.portfolio.process3') },
      ],
      gradient: 'from-purple-500 to-pink-500',
      featured: true,
    },
    {
      title: t('services.custom.title'),
      price: t('services.custom.price'),
      description: t('services.custom.description'),
      features: [
        t('services.custom.feature1'),
        t('services.custom.feature2'),
        t('services.custom.feature3'),
        t('services.custom.feature4'),
      ],
      process: [
        { icon: Clock, text: t('services.custom.process1') },
        { icon: Layers, text: t('services.custom.process2') },
        { icon: RefreshCw, text: t('services.custom.process3') },
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const steps = [
    { number: 1, title: 'Briefing', description: t('services.step1') },
    { number: 2, title: t('services.step2Title'), description: t('services.step2') },
    { number: 3, title: t('services.step3Title'), description: t('services.step3') },
    { number: 4, title: t('services.step4Title'), description: t('services.step4') },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">{t('services.title')}</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`group relative ${service.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full z-10">
                  {t('services.popular')}
                </div>
              )}
              <div className={`h-full glass rounded-2xl p-6 lg:p-8 transition-all duration-300 card-glow gradient-border ${service.featured ? 'ring-2 ring-primary/50' : ''}`}>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-muted-foreground">{t('services.from')}</span>
                    <span className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-sm font-medium text-foreground mb-3">{t('services.includes')}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process */}
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-3">{t('services.process')}</p>
                  <div className="flex flex-wrap gap-3">
                    {service.process.map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                        <item.icon size={12} className="text-primary" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-12">
            <span className="gradient-text">{t('services.howItWorks')}</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                {/* Step Number */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/30">
                  {step.number}
                </div>
                
                <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
