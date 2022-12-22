# [BOJ] 2108. 통계학

n = int(input())  # 수의 개수(홀수)

nums = []   # n개의 정수 -> list에 저장
for _ in range(n) :
	nums.append(int(input()))

# 1) 산술평균 : n개의 수들의 합을 n으로 나눈 값
print(round(sum(nums)/n))  # 소수점 이하 첫째 자리에서 반올림 -> round() 사용

# 2) 중앙값  : n개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
nums.sort()  # 오름차순으로 정렬
print(nums[(n-1)//2])

# 3) 최빈값 : n개의 수들 중 가장 많이 나타나는 값
counts = dict()  # 빈 딕셔너리 생성 / counts = {}
for i in range(1,n+1):
    counts[i] = []
# counts = {1: [], 2: [], 3: [], 4: [], 5: []}

maxCount = 1
count = 1
for j in range(1,n):
	if nums[j] == nums[j-1] :
		count += 1
	else :
		counts[count].append(nums[j-1])
		if maxCount < count : maxCount = count
		count = 1
	if j == n-1 :
		counts[count].append(nums[j])
		if maxCount < count : maxCount = count

if n == 1 :
	counts[1].append(nums[0])

counts[maxCount].sort()
if len(counts[maxCount]) == 1:
	print(counts[maxCount][0])
else :  # 최빈값이 여러 개 있을 경우 -> 최빈값 중 두 번째로 작은 값 출력
	print(counts[maxCount][1])

# 4) 범위 : n개의 수들 중 최댓값과 최소값의 차이
print(nums[-1]-nums[0])   # 중앙값을 구할 때 nums를 sort() 헀으므로!