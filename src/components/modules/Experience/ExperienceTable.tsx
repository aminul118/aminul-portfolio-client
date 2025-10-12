import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import FilteredViews from '@/components/common/filtering/FilteredViews';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import AddExperienceModal from '@/components/modules/Experience/AddExperienceModal';
import ExperienceActions from '@/components/modules/Experience/ExperienceActions';
import Container from '@/components/ui/Container';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllExperience } from '@/services/experience';
const ExperienceTable = async () => {
  const res = await getAllExperience();
  const data = res?.data;

  return (
    <div>
      <Container>
        <div className="mb-4 flex items-center justify-between gap-4">
          <AppSearching />
          <div className="flex gap-4">
            <PageLimit />
            <Sorting />
            <FilteredViews defaultColumns={{ position: true, Company: true }} />
            <ClearAllFilter />
            <AddExperienceModal />
          </div>
        </div>
        <Table>
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>SI</TableHead>
              <TableHead>Position </TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Timeline</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((user, index: number) => (
              <TableRow key={user._id} className="hover:bg-primary/10">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.position}</TableCell>
                <TableCell>{user.companyName}</TableCell>
                <TableCell className="font-medium">{user.timeline}</TableCell>
                <TableCell className="font-medium">
                  <ExperienceActions experience={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default ExperienceTable;
