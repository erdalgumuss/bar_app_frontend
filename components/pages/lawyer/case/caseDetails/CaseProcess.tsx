import { Timeline, TimelineItem } from "@/components/ui/timeline";


export interface TimelineItemProps {
  title: string;
  content: string;
  date: string;
  className?: string;
}

interface CaseProcessProps {
  process: TimelineItemProps[];
}

export const CaseProcess: React.FC<CaseProcessProps> = ({ process }) => (
  <Timeline>
    {process.map((item, index) => (
      <TimelineItem
        key={index}
        title={item.title}
        content={item.content}
        date={item.date}
        className={item.className}
      />
    ))}
  </Timeline>
);
