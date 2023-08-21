module.exports = {
  name: 'Pham Hoang Tuan',
  title: 'Software Product Engineer',
  baseUrl: 'https://phamhoangtuan.github.io/cv',
  facts: {
    'Residence': 'Vietnam',
    'LinkedIn': `<a href="https://www.linkedin.com/in/phamhoangtuan">https://www.linkedin.com/in/phamhoangtuan</span></a>`,
    'Email': '<a href="mailto:phamhoangtuan.it@gmail.com">phamhoangtuan.it@gmail.com</a>',
    'Languages': 'Vietnamese, English',
    'Phone': '(+84) 9 0977 0891'
  },
  experiences: [
    {
      company: 'Aitomatic, Inc.',
      location: 'Remote (Vietnam)',
      title: 'Software Product Engineer',
      period: 'Mar 2021 - Present',
      skills: ['Python', 'AWS', 'Kubernetes', 'Terraform', 'FastAPI', 'LLM', 'Github Actions'],
      contents: `
- Accomplished the development of a question-answering product by utilizing Large Language Models (LLM), leading to enhanced document interpretation and agent reasoning processes.
- Achieved cost-effective scalability in Kubernetes clusters by employing Terraform and Terragrunt, leading to automatic utilization of the most suitable spot instances based on cluster usage.
- Achieved robust and reliable CI/CD pipeline by utilizing Github Actions, leading to significantly improved uptime and deployment time.
- Facilitated UI-based ML model building and data inference by developing a service API with FastAPI.
- Supported product development by constructing framework libraries based on OOP philosophy.
- Enhanced anomaly detection by developing a weekly/daily ETL pipeline that ingests and transforms coldchain data from customers into parquet format, leading to positive customer feedback.
      `
    },
    {
      company: 'SP Digital',
      location: 'Singapore',
      title: 'Senior Data Engineer',
      period: 'Feb 2019 - Feb 2021',
      skills: ['Python', 'Java', 'Talend', 'Hadoop', 'Spark', 'Azure', 'Kubernetes'],
      contents: `
- Successfully upgraded data infrastructure to a newer version without downtime by carefully managing and scheduling updates over 3 months.
- Decreased model training time by 30% and increased accuracy by 45% by creating and managing a system that gathers, transforms, and feeds useful information to a predictive model for electric meter replacement.
- Improved code performance and readability by establishing SQL coding standards and recommending an effective platform for SQL code management.
- Reduced the Mean Time To Repair (MTTR) of data lakes by developing Python scripts for automatic data monitoring.
- Contributed to the creation of an 80% accurate 48-hour price prediction model by developing hourly Kubernetes jobs that ingest electric price data.
      `
    },
    {
      company: 'Honestbee',
      location: 'Singapore',
      title: 'Data Engineer',
      period: 'Sep 2016 - Jan 2019',
      skills: ['Python', 'AWS', 'Airflow', 'Postgres', 'Docker', 'Mesos', 'Looker'],
      contents: `
- Ensured clean and accurate reporting for the BI team by building a data pipeline that processes and stores user, order, behavior, and third-party data.
- Increased overall performance by 25% for product ranking and recommendation systems by optimizing queries.
- Ensured uninterrupted data services by maintaining the high availability of legacy data infrastructure.
      `,
      review: {
        file: 'review_honestbee.png',
        author: 'Nick Young, Head of Data'
      }
    }
  ]
};
