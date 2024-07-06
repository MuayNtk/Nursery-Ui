import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

function handleClick(event: React.MouseEvent<Element, MouseEvent>, href?: string) {
  event.preventDefault();
  if (href) {
    window.location.href = href; // Redirect to the specified href
  }
}

interface Breadcrumb {
  label: string;
  href?: string;
  icon?: React.ReactElement;
  onDelete?: (event: React.MouseEvent) => void;
}

interface CustomizedBreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const CustomizedBreadcrumbs: React.FC<CustomizedBreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <StyledBreadcrumb
            key={index}
            component="a"
            href={breadcrumb.href}
            label={breadcrumb.label}
            icon={breadcrumb.icon}
            onClick={(event) => handleClick(event, breadcrumb.href)}
          />
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default CustomizedBreadcrumbs;
