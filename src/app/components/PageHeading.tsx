import React from "react";
import {
  CalendarIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

interface JobHeaderProps {
  jobTitle?: string;
  jobType?: string;
  location?: string;
  salaryRange?: string;
  closingDate?: string;
}

const JobHeader: React.FC<JobHeaderProps> = ({
  jobTitle,
  jobType,
  closingDate,
}) => {
  return (
    <div className="lg:flex lg:items-center lg:justify-between mb-6">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl/7 font-bold text-gray-300 sm:truncate sm:text-3xl sm:tracking-tight">
          {jobTitle}
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <UsersIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-gray-400"
            />
            {jobType || "All Users"}
          </div>
        
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              aria-hidden="true"
              className="mr-1.5 size-5 shrink-0 text-gray-400"
            />
            Dates {closingDate}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default JobHeader;
