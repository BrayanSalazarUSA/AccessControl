
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import JobHeader from "../components/PageHeading";
import { DeleteOutline, EditNote, Portrait } from "@mui/icons-material";
import useVisitors from "../Hooks/useVisitors";
import { useStateContext } from "../context/ContextProvider";
import { CheckIcon, LinkIcon, PencilIcon } from "@heroicons/react/20/solid";

const UsersPage = () => {

  const { propertySelectedContext, setPropertySelectedContext} = useStateContext();

  const {
    paginatedData,
  } = useVisitors(propertySelectedContext.id); // Obtener datos usando el hook

  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleView = () => {
    console.log("View clicked");
  };

  const handlePublish = () => {
    console.log("Publish clicked");
  };

  return (
    <div className="min-h-screen bg-main-dark-bg text-gray-400 p-8">
      <div className="flex items-center justify-between">
        <JobHeader
          jobTitle="Users Management"
          jobType={propertySelectedContext.name}
          location="44"
          salaryRange="120K"
          closingDate="January 9, 2020"
          onEdit={handleEdit}
          onView={handleView}
          onPublish={handlePublish}
        />
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          {/* Edit Button */}
          <span className="hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <PencilIcon
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5 text-gray-400"
              />
              Edit
            </button>
          </span>

          {/* View Button */}
          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <LinkIcon
                aria-hidden="true"
                className="-ml-0.5 mr-1.5 size-5 text-gray-400"
              />
              View
            </button>
          </span>

          {/* Publish Button */}
          <span className="sm:ml-3">
            <button
              onClick={() => {
                  setPropertySelectedContext({
                    ...propertySelectedContext,
                    id: 0,
                  });
                }}
              type="button"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" />
              All Access
            </button>
          </span>
        </div>
      </div>
      {/* Tabla de usuarios */}
      <TableContainer component={Paper}>
        <Table size="medium" style={{ fontSize: "0.875rem" }}>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Apartment</TableCell>
              <TableCell>Cars</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((visitor, index) => (
              <TableRow key={visitor.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {visitor.firstName} {visitor.lastName}
                </TableCell>
                <TableCell>{visitor.identification}</TableCell>
                <TableCell>{visitor.property.name}</TableCell>
                <TableCell>
                  {new Date(visitor.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {`${visitor.building}, Apt. ${visitor.apartment}`}
                </TableCell>
                <TableCell>{visitor.carPlates}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      color: "white",
                      borderRadius: "50%",
                    }}
                  >
                    <Portrait />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 0, 0, 0.4)",
                      color: "white",
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                  >
                    <DeleteOutline />
                  </IconButton>
                  <IconButton
                    size="small"
                    sx={{
                      backgroundColor: "rgba(0, 255, 0, 0.4)",
                      color: "white",
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                  >
                    <EditNote />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersPage;
