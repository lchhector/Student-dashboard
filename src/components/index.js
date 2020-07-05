import Sidebar from './sidebar';
import SidebarItem from './sidebarItem';
import JobListing from './jobListing';
import JobListingEntry from './jobListingEntry';
import JobDetails from './jobDetails';
import JobDescription from './jobDescription';
import AnalysisOctagon from './analysisOctagon';
import Qualifications from './qualifications';
import Applications from './applications';
import ApplicationsItem from './applicationsItem';
import ApplicationsItemInfo from './applicationsItemInfo';
import BitesizeInfo from './bitesizeInfo';

Sidebar.Item = SidebarItem;
JobListing.Entry = JobListingEntry;
Applications.Item = ApplicationsItem;
Applications.Item.Info = ApplicationsItemInfo;

export {
  Sidebar,
  JobListing,
  JobDetails,
  JobDescription,
  AnalysisOctagon,
  Qualifications,
  Applications,
  BitesizeInfo,
};
