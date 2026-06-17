// ==================== Bootstrap Validation ====================
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();

// ==================== Search & Filter Functions ====================
let allListings = [];
let currentCategory = 'all';

// Store all listings for filtering
function initializeListings() {
  const listingElements = document.querySelectorAll('.listing-item');
  allListings = Array.from(listingElements).map(el => ({
    element: el,
    title: el.querySelector('.card-title-text')?.textContent?.toLowerCase() || '',
    location: el.querySelector('.card-location')?.textContent?.toLowerCase() || '',
    category: el.dataset.category || 'all'
  }));
}

// Search listings
function filterListings() {
  const searchInput = document.getElementById('heroSearch');
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  if (allListings.length === 0) {
    initializeListings();
  }

  const filteredListings = allListings.filter(listing => {
    const matchesSearch = searchTerm === '' || 
                         listing.title.includes(searchTerm) || 
                         listing.location.includes(searchTerm);
    const matchesCategory = currentCategory === 'all' || listing.category === currentCategory;
    return matchesSearch && matchesCategory;
  });

  updateListingsDisplay(filteredListings);
}

// Filter by category
function filterCategory(button, category) {
  // Update active button
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  
  currentCategory = category;
  
  if (allListings.length === 0) {
    initializeListings();
  }

  const searchInput = document.getElementById('heroSearch');
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filteredListings = allListings.filter(listing => {
    const matchesSearch = searchTerm === '' || 
                         listing.title.includes(searchTerm) || 
                         listing.location.includes(searchTerm);
    const matchesCategory = category === 'all' || listing.category === category;
    return matchesSearch && matchesCategory;
  });

  updateListingsDisplay(filteredListings);
}

// Update listings display
function updateListingsDisplay(filteredListings) {
  const grid = document.getElementById('listingsGrid');
  const countElement = document.getElementById('listingCount');

  if (!grid) return;

  // Hide all listings
  allListings.forEach(listing => {
    listing.element.style.display = 'none';
  });

  // Show filtered listings
  filteredListings.forEach(listing => {
    listing.element.style.display = '';
  });

  // Update count
  if (countElement) {
    countElement.textContent = filteredListings.length;
  }

  // Show empty state if no results
  const emptyState = document.querySelector('.empty-state');
  if (emptyState) {
    emptyState.style.display = filteredListings.length === 0 ? 'block' : 'none';
  }
}

// Toggle wishlist
function toggleWishlist(button) {
  button.classList.toggle('active');
  const icon = button.querySelector('i');
  
  if (button.classList.contains('active')) {
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    icon.style.color = '#EF4444';
  } else {
    icon.classList.add('fa-regular');
    icon.classList.remove('fa-solid');
    icon.style.color = '';
  }

  // Here you could add localStorage or API call to persist wishlist
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeListings();
  
  // Add event listener for search input (enter key)
  const searchInput = document.getElementById('heroSearch');
  if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        filterListings();
      }
    });
  }
});

// ==================== Utilities ====================

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
}

// Show notification
function showNotification(message, type = 'success') {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.setAttribute('role', 'alert');
  alert.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(alert, container.firstChild);
  }

  setTimeout(() => {
    alert.remove();
  }, 4000);
}