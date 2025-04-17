import EditUserImage from '@/components/common/EditUserImage'
import BusinessDetailsInfo from '@/components/section/BusinessDetailsInfo'
import FinancialInvestmentDetails from '@/components/section/FinancialInvestmentDetails'
import LegalCompliance from '@/components/section/LegalCompliance'
import PersonalInformation from '@/components/section/PersonalInformation'
import React from 'react'

const EditDetails = () => {
  return (
    <div>
      {/* ----------- Edit Cover & Profile Image ----------- */}
      <div>
        <EditUserImage />
      </div>
      {/* ----------- Profile complete steps ----------- */}
      <div className="maxWidth py-20 bg-white">
        <div className="flex flex-col md:flex-row gap-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-700">Complete Your Profile</h2>
          <div className="space-y-1 pt-5">
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2 pt-[2px]">
                <p className="w-6 h-6 bg-gray-300 rounded-full flex " />
                <div className="grow border-s-2 h-8 border-dashed border-gray-300" />
              </div>
              <h2 className="text-2xl leading-6 text-gray-500">Personal Information</h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2 pt-[2px]">
                <p className="w-6 h-6 bg-gray-300 rounded-full flex " />
                <div className="grow border-s-2 h-8 border-dashed border-gray-300" />
              </div>
              <h2 className="text-2xl leading-6 text-gray-500">Business Details</h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2 pt-[2px]">
                <p className="w-6 h-6 bg-gray-300 rounded-full flex " />
                <div className="grow border-s-2 h-8 border-dashed border-gray-300" />
              </div>
              <h2 className="text-2xl leading-6 text-gray-500">financial & Investment Details</h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2 pt-[2px]">
                <p className="w-6 h-6 bg-gray-300 rounded-full flex " />
                <div className="grow border-s-2 h-8 border-dashed border-gray-300" />
              </div>
              <h2 className="text-2xl leading-6 text-gray-500">Preferences & Legal Compliance</h2>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex flex-col items-center gap-2 pt-[2px]">
                <p className="w-6 h-6 bg-gray-300 rounded-full flex " />
              </div>
              <h2 className="text-2xl leading-6 text-gray-500">Subscribe</h2>
            </div>
          </div>
        </div>
      </div>
      <PersonalInformation />
      <BusinessDetailsInfo />
      <FinancialInvestmentDetails />
      <LegalCompliance />
    </div>
  )
}

export default EditDetails