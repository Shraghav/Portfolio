import React, { Fragment } from 'react';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const ListItem = ({
  time,
  position,
  company,
  companyLink,
  description,
}: {
  time: React.ReactNode;
  position?: React.ReactNode;
  company?: React.ReactNode;
  companyLink?: string;
  description?: string;
}) => {
  // Helper to neatly format the description string into bullet points
  const renderDescription = (desc?: string) => {
    if (!desc) return null;

    // Split by newlines and filter out any empty lines
    const points = desc.split('.').filter((line) => line.trim() !== '');

    return (
      <ul className="list-disc list-outside ml-4 space-y-2 text-sm opacity-80">
        {points.map((point, idx) => (
          <li key={idx} className="leading-relaxed">
            {point.replace(/^[•\-\*]\s*/, '').trim()}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 mb-6 rounded-box shadow-sm border border-base-300 hover:shadow-md transition-shadow bg-base-100">
      <div className="md:w-1/3 flex-shrink-0">
        <div className="text-xs opacity-60 font-semibold tracking-wide uppercase mb-1">
          {time}
        </div>
        <h3 className="text-lg text-base-content">{position}</h3>
        <div className="font-medium mt-1">
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
            >
              {company}
            </a>
          ) : (
            <span className="opacity-80">{company}</span>
          )}
        </div>
      </div>

      {/* Right Column: Description */}
      <div className="md:w-2/3">
        {renderDescription(description)}
      </div>
    </div>
  );
};

const ExperienceCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <div
          key={index}
          className="flex flex-col md:flex-row gap-6 p-6 mb-6 rounded-box bg-base-200 border border-base-300"
        >
          {/* Skeleton Left */}
          <div className="md:w-1/3">
            {skeleton({ widthCls: 'w-24', heightCls: 'h-4', className: 'mb-3' })}
            {skeleton({ widthCls: 'w-48', heightCls: 'h-6', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-32', heightCls: 'h-4' })}
          </div>
          {/* Skeleton Right */}
          <div className="md:w-2/3">
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
            {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
          </div>
        </div>
      );
    }
    return array;
  };

  return (
    <div className="card shadow-lg card-sm bg-base-200">
      <div className="card-body p-8">
        <div className="mb-6">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content font-bold text-xl">Experience</span>
            )}
          </h5>
        </div>

        <div className="text-base-content">
          {loading ? (
            renderSkeleton()
          ) : (
            <Fragment>
              {experiences.map((experience, index) => (
                <ListItem
                  key={index}
                  time={`${experience.from} - ${experience.to}`}
                  position={experience.position}
                  company={experience.company}
                  description={experience.description}
                  companyLink={
                    experience.companyLink ? experience.companyLink : undefined
                  }
                />
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;