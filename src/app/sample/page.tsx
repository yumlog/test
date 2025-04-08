import Button from "@/components/Button/Button";
import Icon from "/public/images/window.svg";

export default function Sample() {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Button color="primary" size="lg" disabled>
          <Icon className="text-primary" width={24} height={24} />
          button
        </Button>
        <Button color="gray" size="md">
          <Icon width={16} height={16} />
          button
        </Button>
        <Button color="gray" size="sm">
          <Icon width={16} height={16} />
          button
        </Button>
        <Button color="gray" size="xs">
          <Icon width={12} height={12} />
          button
        </Button>
      </div>
    </div>
  );
}
