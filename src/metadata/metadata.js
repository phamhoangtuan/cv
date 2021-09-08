module.exports = {
  name: 'Pham Hoang Tuan',
  title: 'Senior Data Engineer',
  baseUrl: 'https://phamhoangtuan.github.io/cv',
  facts: {
    'Residence': 'Vietnam',
    'LinkedIn': `<a href="https://www.linkedin.com/in/phamhoangtuan">https://www.linkedin.com/in/phamhoangtuan</span></a>`,
    'Email': '<a href="mailto:phamhoangtuan.it@gmail.com">phamhoangtuan.it@gmail.com</a>',
    'Languages': 'Vietnamese, English'
  },
  experiences: [
    {
      company: 'Aitomatic, Inc.',
      location: 'Vietnam',
      title: 'Data/Field Engineer',
      period: 'Mar 2021 - Present',
      skills: ['Python', 'AWS', 'Kubernetes'],
      contents: `
- Developed weekly/daily ETL pipeline to ingest raw coldchain data from customers, transform to parquet format and identify anomaly stores based on Data Scientist models with some positive feedbacks.
- Developed AWS Lambda jobs based on docker images to replace old ETL pipeline and reduce 90% cost of running infrastructure in AWS.
      `
    },
    {
      company: 'SP Digital',
      location: 'Singapore',
      title: 'Senior Data Engineer',
      period: 'Feb 2019 - Feb 2021',
      skills: ['Python', 'Java', 'Talend', 'Hadoop', 'Hive', 'Spark', 'HBase', 'Kubernetes'],
      contents: `
- Upgraded data infrastructure to newer version in production with no downtime in 3 months.
- Took full ownership of a new system to collect, transform and feed useful information to a data science model, which can predict when the electric meter need to be replaced and reduce false alarm for operation team. As a result, time to train model is decreased by 30% and the accuracy is increased by 45%.
- Created coding standards for SQL that helps team members easier to read and review. Moreover, a platform to manage SQL effectively is suggested as an effort to improve code performance and readability.
- Developed python scripts to monitor data automatically and reduce MTTR (Mean Time To Repair) of data lake.
- Developed hourly jobs in Kubernetes to ingest electric price data as an input for the next 48-hours price prediction model with more than 80% accuracy.
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
    }
  ],
  certificates: [
    {
      name: 'Professional Scrum Developer I - May 2020',
      content: 'PSDI.pdf'
    }
  ]
};
