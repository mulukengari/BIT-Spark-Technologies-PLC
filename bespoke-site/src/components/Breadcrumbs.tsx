import Link from "next/link";
import StructuredData from "@/components/StructuredData";
import {
  createBreadcrumbStructuredData,
  type BreadcrumbItem,
} from "@/lib/seo";

export default function Breadcrumbs({
  items,
}: {
  items: readonly BreadcrumbItem[];
}) {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {items.map((item, index) => {
            const isCurrentPage = index === items.length - 1;

            return (
              <li key={item.path}>
                {isCurrentPage ? (
                  <span aria-current="page">{item.name}</span>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
                {!isCurrentPage && (
                  <span className="breadcrumb-separator" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <StructuredData data={createBreadcrumbStructuredData(items)} />
    </>
  );
}
