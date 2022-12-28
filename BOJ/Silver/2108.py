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
from collections import Counter
# Counter : 각각 요소 하나하나별로 몇 번씩 나왔는지 count, 자동으로 크기순으로 정렬
freq = Counter(nums).most_common()
# freq = [[(-2, 1), (1, 1), (2, 1), (3, 1), (8, 1)]]
if len(freq) > 1 and freq[0][1] == freq[1][1]:  # 최빈값이 여러 개라면
    print(freq[1][0])                           # 두 번째로 작은 값 출력
else:
    print(freq[0][0])

# 4) 범위 : n개의 수들 중 최댓값과 최소값의 차이
print(nums[-1]-nums[0])   # 중앙값을 구할 때 nums를 sort() 헀으므로!