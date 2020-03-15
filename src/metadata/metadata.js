module.exports = {
  name: 'Pham Hoang Tuan',
  title: 'Senior Data Engineer',
  baseUrl: 'https://phamhoangtuan.github.io/cv',
  facts: {
    'Residence': 'Singapore',
    'LinkedIn': `<a href="https://www.linkedin.com/in/phamhoangtuan">https://www.linkedin.com/in/phamhoangtuan</span></a>`,
    'Email': '<a href="mailto:phamhoangtuan.it@gmail.com">phamhoangtuan.it@gmail.com</a>',
    'Languages': 'Vietnamese, English'
  },
  experiences: [
    {
      company: 'SP Digital',
      location: 'Singapore',
      title: 'Senior Data Engineer',
      period: 'Feb 2019 - Present',
      skills: ['Python', 'Java', 'Talend', 'Hadoop', 'Hive', 'Spark', 'HBase'],
      contents: `
- 
      `
    },
    {
      company: 'Honestbee',
      location: 'Singapore',
      title: 'Data Engineer',
      period: 'Sep 2016 - Jan 2019',
      skills: ['Python', 'AWS', 'Airflow', 'Postgres', 'Docker', 'Mesos', 'Looker'],
      contents: `
- Developed a data pipeline to collect users' orders information, users' behaviors and other third parties data, process them and store in Datawarehouse. As a result, BI team always have clean and accuracy data to show in their reports.
- Optimized queries to increase overall performance by 25% for product ranking and recommendation system.
- Maitained legacy data infrastructure and ensure its high availability for other dependent data services.
      `,
      review: {
        file: 'review_honestbee.png',
        author: 'Nick Young, Head of Data'
      }
    },
    {
      company: 'Crayon Data',
      location: 'Singapore',
      title: 'Data Scientist Intern',
      period: 'Aug 2015 - Mar 2016',
      skills: ['Python', 'Java', 'MySQL'],
      contents: `
- Developed web crawler with Python libraries to collect data automatically from e-commerce website. As a result, data team can have many raw data to process and train data models for product improvement.
- Implemented a novel extractor to retrieve websites' information based on HTML structure in under 5 seconds per website.
      `,
      review: {
        file: 'review_crayon.png',
        author: 'Vivek Rensol, Product Director'
      }
    },
    {
      company: 'FPT Software',
      location: 'Ho Chi Minh City, Vietnam',
      title: 'Software Engineer',
      period: 'Jun 2013 - Dec 2014',
      skills: ['C#', 'Javascript', 'Sencha Touch', 'Silverlight'],
      contents: `
- Developed a mobile app that useful for salemans to track their performance and reduce paper works. Customers' feedback is 80% positive in general.
- Improved web portal legacy code with Javascipt best practices to increase API response time by 50%.
      `
    }
  ]
};
