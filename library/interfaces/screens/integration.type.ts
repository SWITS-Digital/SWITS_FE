export interface JobBoardType {
  name: string;
  dueDate?: string; // Optional since some job boards in the "Free Job Boards" category don't have a due date
  description: string;
  id: string;
}

// Define the structure of a category, which contains a list of job boards
export interface JobBoardCategoryType {
  category: string;
  boards: JobBoardType[];
}

// Define the root structure which is an array of categories
export interface JobBoardsDataType {
  jobBoards: JobBoardCategoryType[];
}
