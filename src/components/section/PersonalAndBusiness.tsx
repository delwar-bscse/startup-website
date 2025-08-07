import dayjs from "dayjs";
import React from "react";

interface PersonalAndBusinessProps {
  user: {
    name?: string;
    email?: string;
    phone?: string;
    dateOfBirth?: string;
    gender?: string;
    personalInfo?: {
      occupation?: string;
      Nationality?: string;
      address?: string;
      city?: string;
      state?: string;
    };
    businessInfo?: {
      companyName?: string;
      CompanyType?: string;
      experience?: string;
      CompanyRegistrationNumber?: string;
      EstablishmentDate?: string;
      BusinessWebsiteURL?: string;
    };
  };
}

const PersonalAndBusiness: React.FC<PersonalAndBusinessProps> = ({ user }) => {
  console.log("personal and business user", user);
  return (
    <>
      <div className="py-16 space-y-12 maxWidth">
        {/* --- Personal ---*/}
        <div>
          <h3 className="pb-4 mb-4 text-2xl font-bold text-gray-700 border-b border-gray-300 md:text-3xl">
            Personal Details
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {user?.name && (
              <p className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span className="text-gray-600">{user?.name}</span>
              </p>
            )}
            {user?.email && (
              <p className="flex flex-col">
                <span className="font-semibold">E-Mail</span>
                <span className="text-gray-600">{user?.email}</span>
              </p>
            )}
            {user?.phone && (
              <p className="flex flex-col">
                <span className="font-semibold">Phone</span>
                <span className="text-gray-600">{user?.phone}</span>
              </p>
            )}
            {user?.dateOfBirth && (
              <p className="flex flex-col">
                <span className="font-semibold">Date of Birth</span>
                <span className="text-gray-600">user?.dateOfBirth</span>
              </p>
            )}
            {user?.gender && (
              <p className="flex flex-col">
                <span className="font-semibold">Gender</span>
                <span className="text-gray-600">Male</span>
              </p>
            )}
            {user?.personalInfo?.occupation && (
              <p className="flex flex-col">
                <span className="font-semibold">Occupation</span>
                <span className="text-gray-600">
                  {user?.personalInfo?.occupation}
                </span>
              </p>
            )}
            {user?.personalInfo?.Nationality && (
              <p className="flex flex-col">
                <span className="font-semibold">Nationality</span>
                <span className="text-gray-600">
                  {user?.personalInfo?.Nationality}
                </span>
              </p>
            )}
            {user?.personalInfo?.address && (
              <p className="flex flex-col">
                <span className="font-semibold">Address</span>
                <span className="text-gray-600">
                  {user?.personalInfo?.address}
                </span>
              </p>
            )}
            {user?.personalInfo?.city && (
              <p className="flex flex-col">
                <span className="font-semibold">City</span>
                <span className="text-gray-600">
                  {user?.personalInfo?.city}
                </span>
              </p>
            )}
            {user?.personalInfo?.state && (
              <p className="flex flex-col">
                <span className="font-semibold">State</span>
                <span className="text-gray-600">
                  {user?.personalInfo?.state}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* --- Business ---*/}
        <div>
          <h3 className="pb-4 mb-4 text-2xl font-bold text-gray-700 border-b border-gray-300 md:text-3xl">
            Business Details
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {user?.businessInfo?.companyName && (
              <p className="flex flex-col">
                <span className="font-semibold">Company Name</span>
                <span className="text-gray-600">
                  {user?.businessInfo?.companyName}
                </span>
              </p>
            )}
            {user?.businessInfo?.CompanyType && (
              <p className="flex flex-col">
                <span className="font-semibold">Company Type</span>
                <span className="text-gray-600">
                  {user?.businessInfo?.CompanyType}
                </span>
              </p>
            )}
            {user?.businessInfo?.experience && (
              <p className="flex flex-col">
                <span className="font-semibold">Years of Experience</span>
                <span className="text-gray-600">
                  {user?.businessInfo?.experience}
                </span>
              </p>
            )}
            {user?.businessInfo?.CompanyRegistrationNumber && (
              <p className="flex flex-col">
                <span className="font-semibold">
                  Company Registration Number
                </span>
                <span className="text-gray-600">
                  {user?.businessInfo?.CompanyRegistrationNumber}
                </span>
              </p>
            )}

            {user?.businessInfo?.EstablishmentDate && (
              <p className="flex flex-col">
                <span className="font-semibold">Date of Establishment</span>
                <span className="text-gray-600">
                  {dayjs(user.businessInfo.EstablishmentDate).format(
                    "DD/MM/YYYY"
                  )}
                </span>
              </p>
            )}
            {user?.businessInfo?.BusinessWebsiteURL && (
              <p className="flex flex-col">
                <span className="font-semibold">Business Website URL</span>
                <span className="text-gray-600">
                  {user?.businessInfo?.BusinessWebsiteURL}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalAndBusiness;
