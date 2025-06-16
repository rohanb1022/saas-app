import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CompanionProps {
  title : string,
  companions? : Companion[],
  classNames? : string
}

const CompanionList = ({ companions ,classNames } : CompanionProps) => {
  return (
    <article className={cn('companion-list', classNames )} >
      <h2 className="font-bold text-3xl " >Recent Sessions</h2>
      <Table>

          {/* Header of every column */}
        <TableHeader>
          {/* Initial row for displaying title of every column */}
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg" >Subject</TableHead>
            <TableHead className="text-lg text-right" >Duration</TableHead>
          </TableRow>
        </TableHeader>

          {/* Table body starts from here */}
        <TableBody>
          { companions?.map(({name , id , topic , duration , subject}) => (
            <TableRow key={id} >

              {/* First column */}
              <TableCell>
                <Link
                  href={`/companion/${id}`}
                > 
                <div className="flex items-center gap-2">
                  <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{backgroundColor :getSubjectColor(subject)}} >
                    <Image 
                      src={`/icons/${subject}.svg`} 
                      alt={subject}
                      width={35}
                      height={35}  
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-2xl">{name}</p>
                    <p className="text-lg">{topic}</p>
                  </div>
                </div> 
                </Link>
              </TableCell>

              {/* second column of subject */}
              <TableCell>
                <div className="subject-badge w-fit max-md:hidden">
                  {subject}
                </div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{backgroundColor : getSubjectColor(subject)}}
                 >
                  <Image
                    src={`/icons/${subject}.svg`}
                    alt="subjectLogo"
                    width={18}
                    height={18}
                  />
                </div>
              </TableCell>

              {/* Third column for the duration */}
              <TableCell>
                <div className="flex items-center gap-2 w-full justify-end" >
                  <p className="text-2xl" >
                    {duration} {"mins"}
                  </p>
                </div>
              </TableCell>

            </TableRow>
          )) }
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
