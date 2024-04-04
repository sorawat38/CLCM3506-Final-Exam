import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, ViewIcon, DeleteIcon } from "@chakra-ui/icons";
import { Fragment } from "react";

type MedicalRecord = {
  id: string;
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
  medication: string;
  treatment: string;
};

function MedicalRecords() {
  const handleEdit = (id: string) => {
    console.log(`Edit record with ID: ${id}`);
  };

  const handleView = (id: string) => {
    console.log(`View record with ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    console.log(`Delete record with ID: ${id}`);
  };
  return (
    <Fragment>
      <Heading as={"h3"}>Medical Records</Heading>
      <TableContainer mt={10}>
        <Table>
          <Thead>
            <Tr>
              <Th>Patient ID</Th>
              <Th>Name</Th>
              <Th>Age</Th>
              <Th>Gender</Th>
              <Th>Diagnosis</Th>
              <Th>Medication</Th>
              <Th>Treatment</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {medicalRecords.map((record) => (
              <Tr key={record.id}>
                <Td>{record.id}</Td>
                <Td>{record.name}</Td>
                <Td>{record.age}</Td>
                <Td>{record.gender}</Td>
                <Td>{record.diagnosis}</Td>
                <Td>{record.medication}</Td>
                <Td>{record.treatment}</Td>
                <Td>
                  <IconButton
                    aria-label="Edit"
                    icon={<EditIcon />}
                    size="sm"
                    mr={2}
                    onClick={() => handleEdit(record.id)}
                  />
                  <IconButton
                    aria-label="View"
                    icon={<ViewIcon />}
                    size="sm"
                    mr={2}
                    onClick={() => handleView(record.id)}
                  />
                  <IconButton
                    aria-label="Delete"
                    icon={<DeleteIcon />}
                    size="sm"
                    onClick={() => handleDelete(record.id)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

export default MedicalRecords;

const medicalRecords: MedicalRecord[] = [
  {
    id: "001",
    name: "John Smith",
    age: 45,
    gender: "Male",
    diagnosis: "Hypertension",
    medication: "Lisinopril",
    treatment: "Blood pressure monitoring, lifestyle changes",
  },
  {
    id: "002",
    name: "Mary Johnson",
    age: 32,
    gender: "Female",
    diagnosis: "Diabetes",
    medication: "Metformin",
    treatment: "Insulin therapy, dietary adjustments",
  },
  {
    id: "003",
    name: "David Williams",
    age: 60,
    gender: "Male",
    diagnosis: "Osteoarthritis",
    medication: "Ibuprofen",
    treatment: "Physical therapy, pain management",
  },
  {
    id: "004",
    name: "Sarah Brown",
    age: 28,
    gender: "Female",
    diagnosis: "Asthma",
    medication: "Albuterol",
    treatment: "Inhaler usage instructions, asthma action plan",
  },
  {
    id: "005",
    name: "Michael Davis",
    age: 50,
    gender: "Male",
    diagnosis: "Hyperlipidemia",
    medication: "Atorvastatin",
    treatment: "Lipid-lowering diet, exercise regimen",
  },
  {
    id: "006",
    name: "Sophia Reynolds",
    age: 35,
    gender: "Female",
    diagnosis: "Migraine",
    medication: "Sumatriptan",
    treatment: "Pain management, stress reduction techniques",
  },
];
