import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
  Save as SaveIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import ContentMain from '../content/Content';
import axios from 'axios';

interface Detail {
  id: number;
  detail: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
}

interface Category {
  id: number;
  name: string;
  details: Detail[];
  expanded: boolean;
  color: string;
  createdAt: string;
  updatedAt: string;
  deleteAt: string | null;
}

const BasicDevPlanForm: React.FC = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<Category[]>([]);

  const [editingCategory, setEditingCategory] = useState<number | null>(null);
  const [editingDetail, setEditingDetail] = useState<number | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newDetailText, setNewDetailText] = useState('');
  const [addingDetailToCategoryId, setAddingDetailToCategoryId] = useState<number | null>(null);
  const [categoryNameEdit, setCategoryNameEdit] = useState('');
  const [detailTextEdit, setDetailTextEdit] = useState('');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ type: 'category' | 'detail', categoryId: number, detailId?: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error' | 'warning' | 'info'
  });
  
  // Default color for all categories
  const defaultColor = '#667eea';

  // Fetch categories on component mount
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/basicplan/getcategories');
      
      // Transform API response to match component state structure
      const transformedCategories = response.data.categories.map((cat: any) => ({
        ...cat,
        expanded: false, // Default to collapsed
        color: defaultColor
      }));
      
      setCategories(transformedCategories);
      
      setSnackbar({
        open: true,
        message: 'โหลดข้อมูลสำเร็จ!',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      setSnackbar({
        open: true,
        message: 'เกิดข้อผิดพลาดในการโหลดข้อมูล',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Toggle expand/collapse category
  const toggleCategory = (categoryId: number) => {
    setCategories(categories.map(cat =>
      cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat
    ));
  };

  // Add new category
  const addCategory = async () => {
    if (newCategoryName.trim()) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post('http://localhost:4000/basicplan/categories', {
          name: newCategoryName
        });

        const newCategory: Category = {
          ...response.data.category,
          details: [],
          expanded: true,
          color: defaultColor
        };

        setCategories([newCategory, ...categories]); // Add to beginning to match API order
        setNewCategoryName('');
        
        setSnackbar({
          open: true,
          message: 'เพิ่มหมวดหมู่สำเร็จ!',
          severity: 'success'
        });
      } catch (error) {
        console.error('Error creating category:', error);
        setSnackbar({
          open: true,
          message: 'เกิดข้อผิดพลาดในการสร้างหมวดหมู่',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Update category name - แก้ไขให้เชื่อมต่อกับ API
  const updateCategory = async (categoryId: number, newName: string) => {
    if (!newName.trim()) {
      setSnackbar({
        open: true,
        message: 'กรุณากรอกชื่อหมวดหมู่',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:4000/basicplan/updatecategories/${categoryId}`,
        { name: newName }
      );

      // อัพเดท state ด้วยข้อมูลจาก API
      setCategories(categories.map(cat =>
        cat.id === categoryId ? { ...cat, name: response.data.category.name } : cat
      ));
      
      setEditingCategory(null);
      setCategoryNameEdit('');
      
      setSnackbar({
        open: true,
        message: 'แก้ไขหมวดหมู่สำเร็จ!',
        severity: 'success'
      });
    } catch (error: any) {
      console.error('Error updating category:', error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'เกิดข้อผิดพลาดในการแก้ไขหมวดหมู่',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

 

  // Delete category
  const confirmDeleteCategory = (categoryId: number) => {
    setDeleteTarget({ type: 'category', categoryId });
    setDeleteDialogOpen(true);
  };

  const deleteCategory = () => {
    if (deleteTarget && deleteTarget.type === 'category') {
      setCategories(categories.filter(cat => cat.id !== deleteTarget.categoryId));
    }
    setDeleteDialogOpen(false);
    setDeleteTarget(null);
  };

  // Add detail to category
  const addDetail = async (categoryId: number) => {
    if (newDetailText.trim()) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:4000/basicplan/details', {
          detail: newDetailText,
          categoryId: categoryId
        });

        // Update state with the new detail from API response
        setCategories(categories.map(cat => {
          if (cat.id === categoryId) {
            return { ...cat, details: [...cat.details, response.data.policyDetail] };
          }
          return cat;
        })); 
        
        setNewDetailText('');
        setAddingDetailToCategoryId(null);
        
        setSnackbar({
          open: true,
          message: 'เพิ่มรายละเอียดสำเร็จ!',
          severity: 'success'
        });
      } catch (error: any) {
        console.error('Error creating detail:', error);
        setSnackbar({
          open: true,
          message: error.response?.data?.message || 'เกิดข้อผิดพลาดในการเพิ่มรายละเอียด',
          severity: 'error'
        });
      } finally {
        setLoading(false);
      }
    }
  };

  // Update detail
  const updateDetail = async (categoryId: number, detailId: number, newText: string) => {
    if (!newText.trim()) {
      setSnackbar({
        open: true,
        message: 'กรุณากรอกรายละเอียด',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.put(
        `http://localhost:4000/basicplan/updatepolicy/${detailId}`,
        { detail: newText }
      );

      // อัพเดท state ด้วยข้อมูลจาก API
      setCategories(categories.map(cat => {
        if (cat.id === categoryId) {
          return {
            ...cat,
            details: cat.details.map(detail =>
              detail.id === detailId ? { ...detail, detail: response.data.policyDetail.detail } : detail
            )
          };
        }
        return cat;
      }));
      
      setEditingDetail(null);
      setDetailTextEdit('');
      
      setSnackbar({
        open: true,
        message: 'แก้ไขรายละเอียดสำเร็จ!',
        severity: 'success'
      });
    } catch (error: any) {
      console.error('Error updating detail:', error);
      setSnackbar({
        open: true,
        message: error.response?.data?.message || 'เกิดข้อผิดพลาดในการแก้ไขรายละเอียด',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete detail
  const confirmDeleteDetail = (categoryId: number, detailId: number) => {
    setDeleteTarget({ type: 'detail', categoryId, detailId });
    setDeleteDialogOpen(true);
  };

  const deleteDetail = () => {
    if (deleteTarget && deleteTarget.type === 'detail' && deleteTarget.detailId) {
      setCategories(categories.map(cat => {
        if (cat.id === deleteTarget.categoryId) {
          return {
            ...cat,
            details: cat.details.filter(detail => detail.id !== deleteTarget.detailId)
          };
        }
        return cat;
      }));
    }
    setDeleteDialogOpen(false);
    setDeleteTarget(null);
  };

  const startEditingCategory = (category: Category) => {
    setEditingCategory(category.id);
    setCategoryNameEdit(category.name);
  };

  const startEditingDetail = (detail: Detail) => {
    setEditingDetail(detail.id);
    setDetailTextEdit(detail.detail);
  };

  return (
    <ContentMain>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {/* Header */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
                จัดการนโยบายและเงื่อนไข
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                เพิ่ม แก้ไข และจัดการหมวดหมู่นโยบายและรายละเอียด
              </Typography>
            </Paper>
          </Grid>

          {/* Add New Category */}
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                เพิ่มหมวดหมู่ใหม่
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="ชื่อหมวดหมู่..."
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addCategory()}
                  size="small"
                  disabled={loading}
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <AddIcon />}
                  onClick={addCategory}
                  sx={{ minWidth: 120 }}
                  disabled={loading}
                >
                  เพิ่มหมวด
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Categories List */}
          <Grid item xs={12}>
            {loading && categories.length === 0 ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
                <CircularProgress />
              </Box>
            ) : (
              <>
                {categories.map((category) => (
                  <Accordion
                    key={category.id}
                    expanded={category.expanded}
                    onChange={() => toggleCategory(category.id)}
                    sx={{ mb: 2, boxShadow: 3 }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        background: `linear-gradient(135deg, ${category.color} 0%, ${category.color}dd 100%)`,
                        color: 'white',
                        '& .MuiAccordionSummary-expandIconWrapper': {
                          color: 'white'
                        }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', pr: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                          {editingCategory === category.id ? (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }} onClick={(e) => e.stopPropagation()}>
                              <TextField
                                fullWidth
                                size="small"
                                value={categoryNameEdit}
                                onChange={(e) => setCategoryNameEdit(e.target.value)}
                                onKeyPress={(e) => {
                                  if (e.key === 'Enter' && !loading) {
                                    updateCategory(category.id, categoryNameEdit);
                                  }
                                }}
                                sx={{ backgroundColor: 'white', borderRadius: 1 }}
                                disabled={loading}
                                autoFocus
                              />
                              <IconButton
                                size="small"
                                onClick={() => updateCategory(category.id, categoryNameEdit)}
                                disabled={loading}
                                sx={{ color: 'white', backgroundColor: 'rgba(76, 175, 80, 0.8)', '&:hover': { backgroundColor: 'rgba(76, 175, 80, 1)' } }}
                              >
                                {loading ? <CircularProgress size={16} color="inherit" /> : <SaveIcon fontSize="small" />}
                              </IconButton>
                              <IconButton
                                size="small"
                                onClick={() => {
                                  setEditingCategory(null);
                                  setCategoryNameEdit('');
                                }}
                                disabled={loading}
                                sx={{ color: 'white', backgroundColor: 'rgba(244, 67, 54, 0.8)', '&:hover': { backgroundColor: 'rgba(244, 67, 54, 1)' } }}
                              >
                                <CloseIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          ) : (
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {category.name}
                            </Typography>
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} onClick={(e) => e.stopPropagation()}>
                          <Chip
                            label={`${category.details.length} รายการ`}
                            size="small"
                            sx={{ backgroundColor: 'rgba(255,255,255,0.3)', color: 'white' }}
                          />
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              startEditingCategory(category);
                            }}
                            sx={{ color: 'white' }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              confirmDeleteCategory(category.id);
                            }}
                            sx={{ color: 'white' }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3 }}>
                      {/* Details List */}
                      {category.details.length > 0 ? (
                        <Box sx={{ mb: 2 }}>
                          {category.details.map((detail) => (
                            <Paper
                              key={detail.id}
                              elevation={1}
                              sx={{
                                p: 2,
                                mb: 1.5,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                '&:hover': { backgroundColor: '#f5f5f5' },
                                transition: 'background-color 0.2s'
                              }}
                            >
                              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: category.color, flexShrink: 0 }} />
                              {editingDetail === detail.id ? (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
                                  <TextField
                                    fullWidth
                                    size="small"
                                    value={detailTextEdit}
                                    onChange={(e) => setDetailTextEdit(e.target.value)}
                                    onKeyPress={(e) => {
                                      if (e.key === 'Enter' && !loading) {
                                        updateDetail(category.id, detail.id, detailTextEdit);
                                      }
                                    }}
                                    disabled={loading}
                                    autoFocus
                                  />
                                  <IconButton
                                    size="small"
                                    color="success"
                                    onClick={() => updateDetail(category.id, detail.id, detailTextEdit)}
                                    disabled={loading}
                                  >
                                    {loading ? <CircularProgress size={16} color="inherit" /> : <SaveIcon fontSize="small" />}
                                  </IconButton>
                                  <IconButton
                                    size="small"
                                    onClick={() => {
                                      setEditingDetail(null);
                                      setDetailTextEdit('');
                                    }}
                                    disabled={loading}
                                  >
                                    <CloseIcon fontSize="small" />
                                  </IconButton>
                                </Box>
                              ) : (
                                <>
                                  <Typography sx={{ flex: 1 }}>{detail.detail}</Typography>
                                  <Box>
                                    <IconButton
                                      size="small"
                                      color="primary"
                                      onClick={() => startEditingDetail(detail)}
                                    >
                                      <EditIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton
                                      size="small"
                                      color="error"
                                      onClick={() => confirmDeleteDetail(category.id, detail.id)}
                                    >
                                      <DeleteIcon fontSize="small" />
                                    </IconButton>
                                  </Box>
                                </>
                              )}

                            </Paper>
                          ))}
                        </Box>
                      ) : (
                        <Box sx={{ textAlign: 'center', py: 4, color: 'text.secondary' }}>
                          <Typography>ยังไม่มีรายละเอียดในหมวดนี้</Typography>
                        </Box>
                      )}

                      {/* Add New Detail */}
                      {addingDetailToCategoryId === category.id ? (
                        <Paper elevation={2} sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <TextField
                              fullWidth
                              size="small"
                              placeholder="รายละเอียดใหม่..."
                              value={newDetailText}
                              onChange={(e) => setNewDetailText(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && !loading && addDetail(category.id)}
                              disabled={loading}
                              autoFocus
                            />
                            <Button
                              variant="contained"
                              color="success"
                              size="small"
                              startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SaveIcon />}
                              onClick={() => addDetail(category.id)}
                              disabled={loading}
                            >
                              บันทึก
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              onClick={() => {
                                setAddingDetailToCategoryId(null);
                                setNewDetailText('');
                              }}
                              disabled={loading}
                            >
                              ยกเลิก
                            </Button>
                          </Box>
                        </Paper>
                      ) : (
                        <Button
                          fullWidth
                          variant="outlined"
                          startIcon={<AddIcon />}
                          onClick={() => setAddingDetailToCategoryId(category.id)}
                          disabled={loading}
                          sx={{
                            borderStyle: 'dashed',
                            borderWidth: 2,
                            py: 1.5,
                            '&:hover': {
                              borderColor: 'primary.main',
                              backgroundColor: 'rgba(102, 126, 234, 0.04)'
                            }
                          }}
                        >
                          เพิ่มรายละเอียด
                        </Button>
                      )}
                    </AccordionDetails>
                  </Accordion>
                ))}

                {categories.length === 0 && !loading && (
                  <Paper elevation={2} sx={{ p: 6, textAlign: 'center' }}>
                    <Typography variant="h6" color="text.secondary">
                      ยังไม่มีหมวดหมู่ เริ่มต้นโดยเพิ่มหมวดหมู่ใหม่ด้านบน
                    </Typography>
                  </Paper>
                )}
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>
          {deleteTarget?.type === 'category' ? 'ลบหมวดหมู่' : 'ลบรายละเอียด'}
        </DialogTitle>
        <DialogContent>
          <Typography>
            {deleteTarget?.type === 'category'
              ? 'คุณต้องการลบหมวดหมู่นี้และรายละเอียดทั้งหมดหรือไม่?'
              : 'คุณต้องการลบรายละเอียดนี้หรือไม่?'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>ยกเลิก</Button>
          <Button
            onClick={deleteTarget?.type === 'category' ? deleteCategory : deleteDetail}
            color="error"
            variant="contained"
          >
            ลบ
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContentMain>
  );
};

export default BasicDevPlanForm;