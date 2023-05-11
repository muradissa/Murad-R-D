import React from 'react'
import DepartCard from './DepartCard';

function Departmentss() {
// Marketing Human Resources Finance Legal Sales Software Development Devops QA
    const departs = [
        { name: 'Marketing', image: 'marketing.gif' },
        { name: 'Human Resources', image: 'hr.gif' },
        { name: 'Finance', image: 'finance.gif' },
        { name: 'Legal', image: 'legal.gif' },
        { name: 'Sales', image: 'sales.gif' },
        { name: 'UX/UI', image: 'uxui.gif' },
        // { name: 'Frontend', image: 'frontend.gif' },
        // { name: 'Backend', image: 'backend.gif' },
        { name: 'Software Developer', image: 'software.gif' },
        { name: 'Devops', image: 'devops.gif' },
        { name: 'QA', image: 'qa.gif' },
      ];
    return (
        <div className="department-cards">
            <div className="row" style={{ gap: '0rem' }}>
                {departs.map((dept) => (
                    <DepartCard key={dept.name} department={dept} />
                ))} 
            </div>
        </div>
    )
}

export default Departmentss;