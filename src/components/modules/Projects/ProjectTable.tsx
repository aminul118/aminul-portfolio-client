import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import FilteredViews from '@/components/common/filtering/FilteredViews';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import Container from '@/components/ui/Container';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';
import AddProjectModal from './AddProjectModal';
import ProjectActions from './ProjectActions';

export interface IProject {
  _id?: string;
  title: string;
  slug?: string;
  liveLink: string;
  content: string;
  technology: string[];
  thumbnail: string;
  photos?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  isFeatured?: boolean;
}

const ProjectTable = () => {
  const projects: IProject[] = [
    {
      _id: '1',
      title: 'Parcel Point',
      slug: 'parcel-point',
      liveLink: '#',
      content:
        'Parcel Point is a robust parcel booking and delivery management platform designed to streamline logistics operations.',
      technology: ['MongoDB', 'React', 'Express'],
      thumbnail: '/assets/projects/percel.png',
      isFeatured: true,
    },
    {
      _id: '2',
      title: 'Task Manager',
      slug: 'task-manager',
      liveLink: '#',
      content:
        'Task Manager is a productivity tool built with the MERN stack to manage tasks efficiently.',
      technology: ['MongoDB', 'React', 'Express'],
      thumbnail: '/assets/projects/percel.png',
      isFeatured: false,
    },
  ];

  return (
    <Container>
      {/* Top Filters and Controls */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <AppSearching />
        <div className="flex flex-wrap gap-4">
          <PageLimit />
          <Sorting />
          <FilteredViews defaultColumns={{ position: true, company: true }} />
          <ClearAllFilter />
          <AddProjectModal />
        </div>
      </div>

      {/* Projects Table */}
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead>SI</TableHead>
            <TableHead>Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Live Link</TableHead>
            <TableHead>Featured</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={project._id} className="hover:bg-primary/5">
              <TableCell>{index + 1}</TableCell>

              <TableCell>
                {project.thumbnail ? (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    width={60}
                    height={40}
                    className="rounded-md object-cover"
                  />
                ) : (
                  <span className="text-gray-400 italic">No image</span>
                )}
              </TableCell>

              <TableCell>{project.title}</TableCell>

              <TableCell>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </TableCell>

              <TableCell>
                {project.isFeatured ? (
                  <span className="font-medium text-green-600">Yes</span>
                ) : (
                  <span className="text-gray-500">No</span>
                )}
              </TableCell>

              <TableCell>
                <ProjectActions project={project} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ProjectTable;
