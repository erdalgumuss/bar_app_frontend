interface Application {
  _id: string;
  applicantName: string;
  contactDetails: {
    email: string;
    phone: string;
    address: string;
  };
  eventTitle: string;
  eventCategory: string;
  status: string;
  date: string;
  assignedLawyer?: string | null;
}